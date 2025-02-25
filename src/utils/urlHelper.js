/**
 * Helper function to prepend the base path to URLs
 * @param {string} path - The path without the base path
 * @returns {string} The complete URL with base path
 */
export const getUrl = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return `/fuwari_demo/${cleanPath}`;
};
