---
title: "Fuwariで始めるブログ作成"
description: "Fuwariブログテンプレートを使って最初のブログを作成する方法"
pubDate: 2024-03-10
heroImage: "/images/banner.jpg"
category: "Examples"
tags: ["Fuwari", "Blogging", "Example"]
---

# Fuwari で始めるブログ作成

このガイドでは、Fuwari ブログテンプレートを使って最初のブログを作成する方法を説明します。

## 1. プロジェクトのセットアップ

まず、以下のコマンドでプロジェクトを作成します：

```bash
npm create astro@latest -- --template minimal
```

## 2. 依存関係のインストール

必要なパッケージをインストールします：

```bash
npm install @astrojs/tailwind @astrojs/mdx
```

## 3. 設定ファイルの編集

`astro.config.mjs`を編集して、必要な統合を追加します：

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
});
```

## 4. 最初の記事を書く

`src/content/posts/`ディレクトリに新しいマークダウンファイルを作成します：

```markdown
---
title: My First Post
description: This is my first blog post
pubDate: 2024-03-10
---

# Hello, World!
```

## 5. ブログの確認

開発サーバーを起動して、ブログを確認します：

```bash
npm run dev
```

これで、基本的なブログの設定は完了です！
