let count = 0;

export async function post({ request }) {
  count++;
  return new Response(String(count));
}
