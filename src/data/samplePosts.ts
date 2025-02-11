import type { Post } from "../types/Post";

export const posts: Post[] = [
  {
    id: 1,
    title: "買い物リスト",
    content: "牛乳、パン、卵を買う",
    category: "Shopping",
    tags: ["Important"],
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "会議メモ",
    content: "プロジェクトの進捗確認",
    category: "Work",
    tags: ["Urgent", "Important"],
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "旅行計画",
    content: "来月の旅行の計画を立てる",
    category: "Personal",
    tags: ["Later"],
    date: "2024-01-13",
  },
];
