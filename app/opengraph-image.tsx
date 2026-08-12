import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Raj Kamal Singh — Data Analyst & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0d12",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(94,234,212,0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f2b134",
            marginBottom: 28,
          }}
        >
          Data Analyst · Aspiring Data Scientist · ML &amp; Research
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            color: "#f2efe6",
            fontWeight: 600,
            marginBottom: 24,
            lineHeight: 1.05,
          }}
        >
          Raj Kamal Singh
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c9c4b6",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Turning messy data into decisions and deployable ML systems.
        </div>
      </div>
    ),
    { ...size }
  );
}