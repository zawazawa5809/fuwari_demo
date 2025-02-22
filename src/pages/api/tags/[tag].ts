import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import TimelineLayout from "../../../layouts/TimelineLayout.astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const posts = await getCollection("posts");
    const tag = params.tag === "all" ? "" : params.tag;

    // タグでフィルタリング
    const filteredPosts = tag
      ? posts.filter((post) =>
          post.data.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
        )
      : posts;

    // 日付でソート
    const sortedPosts = filteredPosts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    // TimelineLayoutをレンダリング
    const timeline = await TimelineLayout({ posts: sortedPosts });

    return new Response(timeline.toString(), {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
