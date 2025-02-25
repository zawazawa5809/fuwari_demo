// 静的ビルド用に変更
export function get() {
  return new Response(
    JSON.stringify({
      message: "Static build does not support counter increment",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
