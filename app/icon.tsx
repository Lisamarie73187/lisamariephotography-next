import { ImageResponse } from "next/og";

// Browser-tab favicon. Colors mirror --color-accent / --color-on-accent in tokens.css.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8c6a54",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        LM
      </div>
    ),
    size,
  );
}
