export type CategorySlug =
  | "space"
  | "physics"
  | "mathematics"
  | "computer-science"
  | "nature";

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  description: string;
  tagline: string;
  iconName: string;
  color: string;
  gradient: string;
  badgeBg: string;
  topicCount: number;
}

export interface ArticlePreview {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  tags: string[];
  publishedAt: string;
  readTime: string;
  hasInteractive: boolean;
  featured?: boolean;
}
