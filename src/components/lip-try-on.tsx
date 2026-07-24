"use client";

import { Camera, Loader2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type {
  FaceLandmarker as FaceLandmarkerType,
  NormalizedLandmark,
} from "@mediapipe/tasks-vision";

const SHOPEE_URL = "https://s.shopee.co.th/4qEDJVMei2";
const PRICE = "฿299";

const SHADES = [
  { id: "101", name: "Pomelo", color: "#eb6565" },
  { id: "102", name: "Teddy", color: "#e36165" },
  { id: "103", name: "Misty", color: "#d5575c" },
  { id: "104", name: "Brick", color: "#d44747" },
  { id: "105", name: "Rosewood", color: "#bd524d" },
];

const LIP_COLOR_INTENSITY = 0.3;

// MediaPipe FaceLandmarker (478-point face mesh) lip contour indices.
const LIPS_OUTER = [
  61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84,
  181, 91, 146,
];
const LIPS_INNER = [
  78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308, 324, 318, 402, 317, 14, 87,
  178, 88, 95,
];

type Status = "idle" | "loading" | "running" | "error";

export function LipTryOn() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landmarkerRef = useRef<FaceLandmarkerType | null>(null);
  const rafRef = useRef<number>(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selected, setSelected] = useState(SHADES[0]);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;

  const lastTimestampRef = useRef(0);

  const renderLoop = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const landmarker = landmarkerRef.current;
    if (
      !video ||
      !canvas ||
      !landmarker ||
      video.readyState < 2 ||
      !video.videoWidth ||
      !video.videoHeight
    ) {
      rafRef.current = requestAnimationFrame(renderLoop);
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();

    // detectForVideo requires a strictly increasing integer timestamp (ms).
    const timestamp = Math.max(
      Math.round(performance.now()),
      lastTimestampRef.current + 1,
    );
    lastTimestampRef.current = timestamp;

    let face: NormalizedLandmark[] | undefined;
    // MediaPipe's WASM runtime prints benign init diagnostics (e.g. "INFO:
    // Created TensorFlow Lite XNNPACK delegate for CPU.") through
    // console.error, which Next.js's dev overlay treats as a crash. Silence
    // the console just for this call so real errors still surface below.
    const { log, info, error } = console;
    console.log = console.info = console.error = () => {};
    try {
      const result = landmarker.detectForVideo(video, timestamp);
      face = result.faceLandmarks[0];
    } catch (err) {
      console.log = log;
      console.info = info;
      console.error = error;
      console.warn("Face landmark detection failed for this frame:", err);
    } finally {
      console.log = log;
      console.info = info;
      console.error = error;
    }
    if (face) {
      const toPoint = (i: number) => ({
        x: (1 - face[i].x) * canvas.width,
        y: face[i].y * canvas.height,
      });

      ctx.save();
      ctx.beginPath();
      LIPS_OUTER.forEach((i, idx) => {
        const p = toPoint(i);
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.closePath();
      LIPS_INNER.forEach((i, idx) => {
        const p = toPoint(i);
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.closePath();
      ctx.clip("evenodd");

      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = LIP_COLOR_INTENSITY;
      ctx.fillStyle = selectedRef.current.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "soft-light";
      ctx.globalAlpha = LIP_COLOR_INTENSITY * 0.64;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    rafRef.current = requestAnimationFrame(renderLoop);
  };

  const start = async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error(
          "This browser doesn't support camera access here (getUserMedia unavailable). Try Safari or Chrome, and make sure you're on https.",
        );
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      const video = videoRef.current;
      if (!video) return;
      video.srcObject = stream;
      try {
        await video.play();
      } catch {
        // Some browsers (notably iOS Safari) can reject the first play()
        // call right after getUserMedia resolves; retry once.
        await video.play();
      }

      if (!landmarkerRef.current) {
        const { FaceLandmarker, FilesetResolver } =
          await import("@mediapipe/tasks-vision");
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm",
        );
        landmarkerRef.current = await FaceLandmarker.createFromOptions(
          filesetResolver,
          {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
              // CPU is slower but far more reliably supported across
              // browsers (GPU/WebGL delegate is flaky on iOS Safari).
              delegate: "CPU",
            },
            runningMode: "VIDEO",
            numFaces: 1,
          },
        );
      }

      setStatus("running");
      renderLoop();
    } catch (err) {
      setStatus("error");
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setErrorMsg(
          "Camera access was denied. Allow camera permission to try shades on.",
        );
      } else {
        const detail =
          err instanceof Error ? `${err.name}: ${err.message}` : String(err);
        setErrorMsg(
          `Couldn't start the camera or load the try-on model. (${detail})`,
        );
      }
    }
  };

  const stop = () => {
    cancelAnimationFrame(rafRef.current);
    const stream = videoRef.current?.srcObject as MediaStream | null;
    stream?.getTracks().forEach((t) => t.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setStatus("idle");
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      const stream = videoRef.current?.srcObject as MediaStream | null;
      stream?.getTracks().forEach((t) => t.stop());
      landmarkerRef.current?.close();
    };
  }, []);

  return (
    <section
      id="try-on"
      className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 editorial-reveal">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] block mb-2">
            Try It On
          </span>
          <h2 className="font-headline-lg text-headline-lg text-dark-accent">
            Virtual Lip Try-On
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-md mx-auto">
            See a shade on your own lips using your camera — nothing is recorded
            or uploaded, it all runs on your device.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch editorial-reveal">
          {/* Left: AR camera view */}
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full md:min-h-[320px] bg-surface-container overflow-hidden">
            <video
              ref={videoRef}
              playsInline
              webkit-playsinline="true"
              autoPlay
              muted
              className="hidden"
            />
            <canvas
              ref={canvasRef}
              className={`w-full h-full object-cover ${status === "running" ? "block" : "hidden"}`}
            />
            {status === "running" && (
              <button
                type="button"
                onClick={stop}
                aria-label="Stop camera"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            {status !== "running" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Starting camera and loading the try-on model…
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary">
                      <Camera className="w-7 h-7" />
                    </div>
                    <button
                      type="button"
                      onClick={start}
                      className="px-8 py-3 bg-primary text-white font-label-md text-label-md tracking-widest uppercase hover:bg-dark-accent transition-all duration-500"
                    >
                      Start Camera
                    </button>
                    {status === "error" && (
                      <p className="font-body-sm text-body-sm text-destructive max-w-xs">
                        {errorMsg}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Right: shade tool */}
          <div className="flex flex-col justify-between bg-surface-container-lowest p-8 h-full">
            <div>
              <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] block mb-2">
                Now Wearing
              </span>
              <div className="flex justify-between">
                <h3 className="font-headline-md text-headline-md text-dark-accent uppercase mb-1">
                  {selected.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
                  Shade {selected.id} · {PRICE}
                </p>
              </div>

              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em] block mb-4">
                Choose a shade
              </span>
              <div className="grid grid-cols-5 gap-4">
                {SHADES.map((shade) => (
                  <button
                    key={shade.id}
                    type="button"
                    onClick={() => setSelected(shade)}
                    aria-label={shade.name}
                    className={`aspect-square rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                      selected.id === shade.id
                        ? "ring-2 ring-offset-2 ring-primary"
                        : ""
                    }`}
                    style={{ backgroundColor: shade.color }}
                  >
                    <span className="font-label-md text-label-md text-white">
                      {shade.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
