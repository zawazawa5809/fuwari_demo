---
title: "Simple Guides for Fuwari"
description: "Fuwariブログテンプレートの基本的な使い方ガイド"
pubDate: 2024-04-01
heroImage: "/images/banner.jpg"
tags: ["fuwari", "blogging", "customization"]
---

# Fuwari へようこそ！

このブログテンプレートは[Astro](https://astro.build)で構築されています。このガイドに記載されていない事項については、[Astro Docs](https://docs.astro.build)を参照してください。

## Front-matter of Posts

```yaml
---
title: My First Blog Post
published: 2024-03-20
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| 属性        | 説明                                        |
| ----------- | ------------------------------------------- |
| title       | 投稿のタイトル                              |
| published   | 投稿の公開日                                |
| description | 投稿の短い説明（インデックスページに表示）  |
| image       | カバー画像のパス                            |
| tags        | 投稿のタグ                                  |
| category    | 投稿のカテゴリ                              |
| draft       | 下書きかどうか（true の場合は表示されない） |

## 投稿ファイルの配置場所

投稿ファイルは`src/content/posts/`ディレクトリに配置します。サブディレクトリを作成して投稿やアセットを整理することもできます。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
