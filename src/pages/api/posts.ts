import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import TimelineLayout from "../../layouts/TimelineLayout.astro";

export const GET: APIRoute = async ({ url }) => {
  const tag = url.searchParams.get("tag")?.toLowerCase();
  const posts = await getCollection("posts");

  // タグでフィルタリング
  const filteredPosts = tag
    ? posts.filter((post) =>
        post.data.tags?.some((t) => t.toLowerCase() === tag)
      )
    : posts;

  // 日付でソート
  const sortedPosts = filteredPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  // TimelineLayoutコンポーネントをレンダリング
  const timeline = await TimelineLayout({ posts: sortedPosts });

  return new Response(timeline.toString(), {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
