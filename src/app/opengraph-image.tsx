import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const heroImage = await readFile(join(process.cwd(), "public/images/19.jpg"));
  const heroSrc = `data:image/jpeg;base64,${heroImage.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <img
          src={heroSrc}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(20,16,12,0.65) 0%, rgba(20,16,12,0.05) 55%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 64,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F6F4F0",
              letterSpacing: -3,
            }}
          >
            theoo
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#F6F4F0",
              marginTop: 12,
            }}
          >
            The Mood Lip Gloss — Effortless, like you!
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
