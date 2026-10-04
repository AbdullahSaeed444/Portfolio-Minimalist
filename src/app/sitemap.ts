import type { MetadataRoute } from "next";
import { work } from "@/data/work";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://TODO-real-domain.invalid";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  const caseStudies = work.map((project) => `/work/${project.slug}`);

  return [...routes, ...caseStudies].map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}