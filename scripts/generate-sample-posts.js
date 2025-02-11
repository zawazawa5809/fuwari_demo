import fs from "fs";
import path from "path";

const categories = ["Tech", "Life", "Programming", "Design", "Travel"];
const tags = [
  "javascript",
  "typescript",
  "astro",
  "react",
  "vue",
  "nodejs",
  "python",
  "go",
  "rust",
  "web",
];
const postsDir = path.join(process.cwd(), "src/content/posts");

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomItems(arr, min = 1, max = 3) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function generatePost(index) {
  const date = randomDate(new Date(2020, 0, 1), new Date());
  const category = categories[Math.floor(Math.random() * categories.length)];
  const selectedTags = getRandomItems(tags);

  const content = `---
title: "Sample Post ${index}: ${category} Development Tips"
pubDate: ${date.toISOString()}
description: "This is a sample post ${index} about ${category.toLowerCase()} and related technologies. Learn about best practices and modern development techniques."
category: "${category}"
tags: [${selectedTags.map((tag) => `"${tag}"`).join(", ")}]
---

## Introduction

This is a sample post generated for testing the timeline layout. The content includes various topics related to ${category}.

## Main Content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Conclusion

Thank you for reading this sample post about ${category.toLowerCase()}.
`;

  const fileName = `sample-post-${index.toString().padStart(3, "0")}.md`;
  fs.writeFileSync(path.join(postsDir, fileName), content);
}

// Create posts directory if it doesn't exist
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Generate 50 sample posts
for (let i = 1; i <= 50; i++) {
  generatePost(i);
}

console.log("Generated 50 sample posts successfully!");
