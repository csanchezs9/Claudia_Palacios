import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { PROCEDIMIENTOS } from "@/data/procedimientos";
import { ENFERMEDADES } from "@/data/enfermedades";
import { POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/sobre-la-doctora",
    "/procedimientos",
    "/enfermedades",
    "/blog",
    "/contacto",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const procRoutes = PROCEDIMIENTOS.map((p) => ({
    url: `${base}/procedimientos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const enfRoutes = ENFERMEDADES.map((e) => ({
    url: `${base}/enfermedades/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...procRoutes, ...enfRoutes, ...blogRoutes];
}
