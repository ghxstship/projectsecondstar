import type { MetadataRoute } from "next";
import { networkVerticals } from "@/lib/network";
import { logArticles } from "@/lib/log";

const BASE_URL = "https://hvrbor.club";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/episodes",
    "/membership",
    "/network",
    "/archive",
    "/crew",
    "/log",
    "/apply",
    "/about",
    "/press",
    "/deck",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/apply" ? 0.9 : 0.7,
  }));

  const networkRoutes: MetadataRoute.Sitemap = networkVerticals.map((v) => ({
    url: `${BASE_URL}/network/${v.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const logRoutes: MetadataRoute.Sitemap = logArticles.map((a) => ({
    url: `${BASE_URL}/log/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...networkRoutes, ...logRoutes];
}
