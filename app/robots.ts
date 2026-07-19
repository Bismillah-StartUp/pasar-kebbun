import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/forgot", "/password", "/dashboard", "/api/"],
      },
    ],
    sitemap: "https://www.pasar-kebbun.id/sitemap.xml",
  };
}
