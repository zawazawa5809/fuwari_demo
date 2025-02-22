import { defineCollection, z } from "astro:content";

export const SITE_CONFIG = {
  author: "Lorem Ipsum",
  title: "Fuwari Blog",
  description: "A minimal blog template built with Astro",
  lang: "ja",
  ogImage: "/images/banner.jpg",
  themeColors: {
    primary: "#3b82f6",
    secondary: "#06b6d4",
  },
  social: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
};

export const BANNER_CONFIG = {
  style: "image" as const,
  image: "/images/banner.jpg",
  gradient: {
    from: "#3b82f6",
    to: "#06b6d4",
  },
  showOnAllPages: true, // バナーを全ページで表示する設定を追加
};

export const PROFILE_CONFIG = {
  avatar: "/images/avatar.png", // デフォルトのアバター画像パス
  name: "Your Name",
  bio: "Your bio here",
};

export const CATEGORIES = {
  Programming: "プログラミング",
  Life: "生活",
  Tech: "技術",
  // 必要に応じて追加
} as const;

export const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
