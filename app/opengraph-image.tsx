import { ImageResponse } from "next/og";

export const alt = "Antonin Grillet - Portfolio premium React et Next.js";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        background:
          "radial-gradient(circle at top left, rgba(106,168,255,0.28), transparent 34%), linear-gradient(135deg, #f8fbff 0%, #f5f5f7 52%, #e8eefc 100%)",
        padding: "56px",
        fontFamily: "sans-serif",
        color: "#05070b",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.72)",
          background: "rgba(255,255,255,0.72)",
          boxShadow: "0 30px 80px rgba(15,23,42,0.08)",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                height: "18px",
                width: "18px",
                borderRadius: "999px",
                background: "#2563eb",
              }}
            />
            Antonin
          </div>
          <div
            style={{
              borderRadius: "999px",
              border: "1px solid rgba(15,23,42,0.08)",
              padding: "12px 20px",
              fontSize: "20px",
              color: "#475569",
            }}
          >
            React / Next.js / Motion
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "88px",
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              maxWidth: "900px",
            }}
          >
            Des interfaces nettes. Des animations qui respirent.
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.45,
              color: "#334155",
              maxWidth: "860px",
            }}
          >
            Portfolio d'Antonin Grillet. Experiences web premium, rapides et
            soigneusement executees en React, Next.js et TypeScript.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            {["UI systems", "Motion design", "Freelance"].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "999px",
                  background: "#05070b",
                  padding: "14px 20px",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "24px", color: "#2563eb", fontWeight: 600 }}>
            antoningrillet.dev
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
