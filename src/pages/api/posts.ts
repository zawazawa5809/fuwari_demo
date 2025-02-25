import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  return [{ params: { tag: undefined }, props: { posts } }];
}

export const GET: APIRoute = async ({ props }) => {
  if (!props?.posts) {
    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // 日付でソート
  const sortedPosts = [...props.posts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return new Response(JSON.stringify(sortedPosts), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
