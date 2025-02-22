export interface Topic {
  name: string;
  count: number;
  type: "category" | "tag";
}

export interface TopicFilter {
  type: "category" | "tag";
  value: string;
}
