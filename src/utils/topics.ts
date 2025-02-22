import type { CollectionEntry } from "astro:content";
import type { Topic, TopicFilter } from "../types/Topic";

export function getTopics(
  posts: CollectionEntry<"posts">[],
  type: "category" | "tag"
): Topic[] {
  if (type === "category") {
    // カテゴリーの処理
    const categoriesMap = new Map<string, { name: string; count: number }>();

    posts.forEach((post) => {
      const category = post.data.category;
      if (category) {
        const normalizedName = normalizeTag(category) || category.toLowerCase();
        const existing = categoriesMap.get(normalizedName);
        if (existing) {
          existing.count++;
        } else {
          categoriesMap.set(normalizedName, { name: category, count: 1 });
        }
      }
    });

    return Array.from(categoriesMap.entries()).map(
      ([normalized, { name, count }]) => ({
        name,
        count,
        type: "category",
      })
    );
  } else {
    // タグの処理
    const tagsMap = new Map<string, { name: string; count: number }>();

    posts.forEach((post) => {
      post.data.tags?.forEach((tag) => {
        if (!tag) return;
        const normalizedName = normalizeTag(tag) || tag.toLowerCase();
        const existing = tagsMap.get(normalizedName);
        if (existing) {
          existing.count++;
        } else {
          tagsMap.set(normalizedName, { name: tag, count: 1 });
        }
      });
    });

    return Array.from(tagsMap.entries()).map(
      ([normalized, { name, count }]) => ({
        name,
        count,
        type: "tag",
      })
    );
  }
}

export function filterPostsByTopic(
  posts: CollectionEntry<"posts">[],
  filter: TopicFilter | null
): CollectionEntry<"posts">[] {
  if (!filter) return posts;

  return posts.filter((post) => {
    if (filter.type === "category") {
      const postCategory = normalizeTag(post.data.category);
      const filterValue = normalizeTag(filter.value);
      return postCategory === filterValue;
    } else {
      const filterValue = normalizeTag(filter.value);
      return post.data.tags?.some((tag) => normalizeTag(tag) === filterValue);
    }
  });
}

export function normalizeTag(tag: string | undefined | null): string | null {
  if (!tag) return null;
  const trimmed = tag.trim();
  return trimmed ? trimmed.toLowerCase() : null;
}

export function findOriginalTag(posts: any[], normalizedTag: string): string {
  const originalTag = posts
    .find((post) =>
      post.data.tags?.some((t: string) => normalizeTag(t) === normalizedTag)
    )
    ?.data.tags?.find((t: string) => normalizeTag(t) === normalizedTag);

  return originalTag || normalizedTag;
}

export function getTagPosts(posts: any[], tag: string) {
  const normalizedSearchTag = normalizeTag(tag);
  if (!normalizedSearchTag) return [];

  return posts
    .filter((post) =>
      post.data.tags?.some((t: string) => {
        const normalizedPostTag = normalizeTag(t);
        return normalizedPostTag === normalizedSearchTag;
      })
    )
    .sort(
      (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );
}

export function findOriginalCase(
  posts: any[],
  normalizedName: string,
  type: "category" | "tag"
): string {
  if (type === "category") {
    return (
      posts.find((post) => normalizeTag(post.data.category) === normalizedName)
        ?.data.category || normalizedName
    );
  } else {
    return findOriginalTag(posts, normalizedName);
  }
}
