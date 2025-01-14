import { MetadataRoute } from "next";

// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://dev.lulabs.cn/sitemap.xml",
  };
}
