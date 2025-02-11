---
title: "Fuwariブログのカスタマイズガイド"
description: "Fuwariブログテンプレートをカスタマイズするためのヒントとテクニック"
pubDate: 2024-03-11
heroImage: "/images/banner.jpg"
category: "Guides"
tags: ["Customization", "Fuwari", "Example"]
---

# Fuwari ブログのカスタマイズガイド

このガイドでは、Fuwari ブログテンプレートをカスタマイズする方法について説明します。

## テーマのカスタマイズ

Tailwind CSS を使用してテーマをカスタマイズできます：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#4a90e2",
        secondary: "#f39c12",
      },
    },
  },
};
```

## レイアウトの変更

`src/layouts/`ディレクトリのコンポーネントを編集して、レイアウトをカスタマイズできます。

## 新機能の追加

Astro の統合を使用して、新しい機能を追加できます：

- @astrojs/image - 画像の最適化
- @astrojs/sitemap - サイトマップの生成
- @astrojs/rss - RSS フィードの生成

## スタイルのカスタマイズ

グローバルスタイルは`src/styles/global.css`で定義できます：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .custom-heading {
    @apply text-2xl font-bold text-gray-800 dark:text-gray-200;
  }
}
```
