// Helper to prepend the base path to asset URLs
export function getAssetPath(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
