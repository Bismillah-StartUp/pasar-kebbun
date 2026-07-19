import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

const base = "https://www.pasar-kebbun.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/kuliner", "/berita", "/umkm", "/event", "/fasilitas", "/about"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const culinaries = await prisma.culinary.findMany({
    select: { slug: true, updatedAt: true },
  });
  const culinaryUrls = culinaries.map((c) => ({
    url: `${base}/kuliner/${c.slug}`,
    lastModified: c.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const news = await prisma.news.findMany({
    where: { type: "MANUAL" },
    select: { uuid: true, updatedAt: true },
  });
  const newsUrls = news.map((n) => ({
    url: `${base}/berita/${n.uuid}`,
    lastModified: n.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...culinaryUrls, ...newsUrls];
}
