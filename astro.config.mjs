import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

// 環境に応じてbaseを設定
const base = process.env.NODE_ENV === "production" ? "/fuwari_demo" : "";

export default defineConfig({
  site: "https://zawazawa5809.github.io",
  base,
  output: "static",
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
    animate: "none",
    fallback: true,
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
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  assets: {
    debug: true, // 開発時のデバッグを有効化
    backgroundOptimization: true,
  },

  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    optimizeDeps: {
      exclude: ["@astrojs/image", "sharp"],
    },
  },

  headers: {
    "/images/*": [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ],
    "/favicon.svg": [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ],
  },
});
