import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const dynamic = "force-static";
export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#fbfbfc", color: "#16161a" }}>
        <div style={{ fontSize: 96, fontWeight: 700 }}>{company.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#5b4bd6" }}>AI coding tools. Local transcription.</div>
        <div style={{ fontSize: 32, marginTop: 48, color: "#6b6b76" }}>{new URL(company.domain).hostname}</div>
      </div>
    ),
    size,
  );
}
