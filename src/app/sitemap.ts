import { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kasunhettiarachchi.github.io/curious-minds-website";

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/${cat.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((art) => ({
    url: `${baseUrl}/${art.category}/${art.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryEntries,
    ...articleEntries,
  ];
}
