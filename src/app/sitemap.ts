import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "fa-IR": base,
          en: `${base}/?lang=en`,
          ar: `${base}/?lang=ar`,
        },
      },
    },
  ];
}
