import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = siteContent.metadata.openGraphAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#191b18",
          color: "#f2f1eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 20 }}>{siteContent.name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 600, lineHeight: 1.1 }}>
          <span>{siteContent.headline.firstLine}</span>
          <span>{siteContent.headline.secondLine}</span>
          <div style={{ display: "flex", color: "#d64e2d" }}>
            <span>{siteContent.headline.accent}</span>
            <span style={{ color: "#f2f1eb" }}>{siteContent.headline.punctuation}</span>
          </div>
        </div>
        <div style={{ fontSize: 24 }}>{siteContent.availability}</div>
      </div>
    ),
    size,
  );
}