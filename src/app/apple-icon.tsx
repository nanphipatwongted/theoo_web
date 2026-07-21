import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5F5143",
          color: "#F6F4F0",
          fontSize: 100,
          fontWeight: 700,
          letterSpacing: "-9px",
        }}
      >
        theoo
      </div>
    ),
    { ...size },
  );
}
