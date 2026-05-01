import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          background:
            "radial-gradient(ellipse 70% 55% at 0% 0%, rgba(249,115,22,0.22) 0%, transparent 55%), radial-gradient(ellipse 40% 30% at 100% 100%, rgba(249,115,22,0.10) 0%, transparent 55%), #030712",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#fb923c",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
              color: "#fff",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            SG
          </div>
          Portfolio
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.04,
            display: "flex",
          }}
        >
          {personalInfo.name}
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 38,
            color: "#9ca3af",
            fontWeight: 500,
            display: "flex",
          }}
        >
          {personalInfo.title}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#d1d5db",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", color: "#fb923c", fontWeight: 600 }}>
              Real-time UX · Offline-first · Cross-platform
            </div>
            <div style={{ display: "flex" }}>
              4+ years · React Native · Next.js · Firebase
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#fb923c",
              fontWeight: 600,
            }}
          >
            sujitdev29.github.io/portfolio
          </div>
        </div>
      </div>
    ),
    size,
  );
}
