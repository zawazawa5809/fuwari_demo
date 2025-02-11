import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

export default defineConfig({
  site: "https://example.com",

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  viewTransitions: {
    animate: "slide",
    fallback: "animate",
    handleForms: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  build: {
    inlineStylesheets: "auto",
  },

  image: {
    domains: ["example.com"],
    remotePatterns: [{ protocol: "https" }],
  },

  vite: {},
});
