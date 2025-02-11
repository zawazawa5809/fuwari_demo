---
title: "Fuwariのカスタマイズガイド"
description: "Fuwariブログテンプレートのカスタマイズ方法について"
pubDate: 2024-03-20
heroImage: "/images/banner.jpg"
category: "Guides"
tags: ["Fuwari", "Customization", "Blogging"]
---

# Fuwari のカスタマイズ方法

このガイドでは、Fuwari ブログテンプレートの主なカスタマイズポイントについて説明します。

## テーマカラーの変更

`src/config.ts`の`themeColors`セクションで、プライマリカラーとセカンダリカラーを設定できます：

```typescript
export const SITE_CONFIG = {
  // ...
  themeColors: {
    primary: "#3b82f6",
    secondary: "#06b6d4",
  },
  // ...
};
```

## プロフィールの設定

同じく`src/config.ts`の`PROFILE_CONFIG`セクションで、プロフィール情報を設定できます：

```typescript
export const PROFILE_CONFIG = {
  avatar: "/images/profile.jpg",
  name: "あなたの名前",
  bio: "自己紹介文をここに書きます。",
};
```

## バナーのカスタマイズ

`BANNER_CONFIG`で、バナーの表示方法を設定できます：

```typescript
export const BANNER_CONFIG = {
  style: "image", // 'image' または 'gradient'
  image: "/images/banner.jpg",
  gradient: {
    from: "#3b82f6",
    to: "#06b6d4",
  },
};
```

## その他のカスタマイズ

- `tailwind.config.cjs`で TailwindCSS の設定をカスタマイズ
- `src/styles/global.css`でグローバルスタイルを調整
- `src/components/`以下のコンポーネントを編集してレイアウトを変更
