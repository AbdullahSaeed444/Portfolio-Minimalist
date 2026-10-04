import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteContent } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteContent.metadata.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  const caseStudies = projects.map((project) => `/work/${project.slug}`);

  return [...routes, ...caseStudies].map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}