import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface OgImageProps {
  title: string;
  description?: string;
  badge?: string;
}

export async function OgImage({ title, description, badge }: OgImageProps) {
  const caveatFont = fs.readFileSync(path.join(process.cwd(), "public/fonts/Caveat-Bold.ttf"));
  const interRegular = fs.readFileSync(path.join(process.cwd(), "public/fonts/Inter-Regular.ttf"));
  const interBold = fs.readFileSync(path.join(process.cwd(), "public/fonts/Inter-Bold.ttf"));
  const interBlack = fs.readFileSync(path.join(process.cwd(), "public/fonts/Inter-Black.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#050505",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract Glowing Orbs mimicking "aurora-bg" */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 900,
            height: 900,
            background: "radial-gradient(circle, rgba(108, 99, 255, 0.4) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -300,
            right: -200,
            width: 1000,
            height: 1000,
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* Technical Grid Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Header (Signature) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "Caveat",
                  fontSize: "56px",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "1px",
                }}
              >
                Aryan Rawther
              </span>
              <span
                style={{
                  color: "#9CA3AF",
                  fontSize: "20px",
                  marginTop: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Apex Mind LLP
              </span>
            </div>
          </div>

          {/* Main Title Area */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {badge && (
              <div
                style={{
                  display: "flex",
                  color: "#818cf8", // a nice soft indigo
                  fontSize: "20px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  border: "2px solid rgba(129, 140, 248, 0.3)",
                  borderRadius: "100px",
                  padding: "8px 24px",
                  backgroundColor: "rgba(129, 140, 248, 0.1)",
                  marginBottom: "28px",
                }}
              >
                {badge}
              </div>
            )}
            <h1
              style={{
                fontSize: title.length > 50 ? "68px" : "80px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "1000px",
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                style={{
                  fontSize: "32px",
                  color: "#d1d5db",
                  lineHeight: 1.4,
                  marginTop: "24px",
                  marginBottom: 0,
                  maxWidth: "900px",
                }}
              >
                {description.length > 130 ? `${description.slice(0, 130)}...` : description}
              </p>
            )}
          </div>

          {/* Footer Area */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "24px", color: "#6B7280", letterSpacing: "1px" }}>
              aryanrawther.com
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "4px", backgroundColor: "#818cf8" }} />
              <span style={{ fontSize: "24px", color: "#818cf8", fontWeight: "bold", letterSpacing: "1px" }}>
                AI & SEO Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interBlack, weight: 900, style: "normal" },
        { name: "Caveat", data: caveatFont, weight: 700, style: "normal" },
      ],
    }
  );
}
