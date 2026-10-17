import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tory Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#0c0a09", color: "#f5f5f4" }}>
        <div style={{ fontSize: 96, fontWeight: 700 }}>Tory Labs</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#a8a29e" }}>Practical AI that runs on your own device.</div>
        <div style={{ fontSize: 32, marginTop: 48, color: "#a8a29e" }}>torylabs.dev</div>
      </div>
    ),
    size,
  );
}
