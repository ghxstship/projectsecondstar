import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "HVRBOR.CLUB / Saturdays are for the sea.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F2EC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#0A0A0A",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <span>SEAson 1 / Premieres June 20, 2026</span>
          <span style={{ color: "#8A8A86" }}>A GHXSTSHIP Brand</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#0A0A0A",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            HVRBOR<span style={{ color: "#00E5FF" }}>.CLUB</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 156,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Saturdays</span>
            <span>
              are for the sea<span style={{ color: "#00E5FF" }}>.</span>
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#0A0A0A",
            fontFamily: "monospace",
            fontSize: 16,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            borderTop: "3px solid #0A0A0A",
            paddingTop: 24,
          }}
        >
          <span>Eight Saturdays / Seven Networks / One Harbor</span>
          <span style={{ color: "#8A8A86" }}>hvrbor.club</span>
        </div>
      </div>
    ),
    size,
  );
}
