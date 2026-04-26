import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.75, marginBottom: 16 }}>Developer Portfolio</div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
          Building elegant,
          <br />
          performant digital experiences.
        </div>
      </div>
    ),
    size
  );
}
