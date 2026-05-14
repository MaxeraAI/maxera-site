import { ImageResponse } from "next/og";

export const alt = "Maxera · Stop reading about AI. Start putting it to work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
          backgroundColor: "#0A0A0B",
          backgroundImage: [
            "radial-gradient(ellipse 720px 540px at 95% 18%, rgba(245,197,24,0.50) 0%, rgba(245,197,24,0.18) 28%, rgba(10,10,11,0) 60%)",
            "radial-gradient(ellipse 900px 600px at 100% 100%, rgba(245,197,24,0.10) 0%, rgba(10,10,11,0) 55%)",
            "linear-gradient(135deg, rgba(10,10,11,1) 0%, rgba(14,14,16,1) 100%)",
          ].join(", "),
          color: "#F4F5F4",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top eyebrow with pulse dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            color: "#F5C518",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#F5C518",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>
            AI Transformation Partner · Florida · United States
          </div>
        </div>

        {/* Headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "56px",
            fontSize: "104px",
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>Stop reading</div>
          <div
            style={{
              display: "flex",
              color: "#A8AAB1",
              fontStyle: "italic",
            }}
          >
            about AI.
          </div>
          <div style={{ display: "flex" }}>
            <span>Start putting it&nbsp;</span>
            <span style={{ color: "#F5C518", fontStyle: "italic" }}>
              to work.
            </span>
          </div>
        </div>

        {/* Bottom-right wordmark */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "22px",
            color: "rgba(244,245,244,0.6)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>maxera.ai</div>
        </div>

        {/* Bottom-left tagline */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            fontSize: "22px",
            color: "rgba(244,245,244,0.7)",
            letterSpacing: "0.01em",
            maxWidth: "640px",
          }}
        >
          We figure out where AI fits in your business, then we build it.
        </div>
      </div>
    ),
    { ...size }
  );
}
