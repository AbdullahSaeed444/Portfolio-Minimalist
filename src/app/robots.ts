import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteContent.metadata.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}