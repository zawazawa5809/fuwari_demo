import React from "react";
import type { Post } from "../types/Post";

interface TimelineProps {
  posts: Post[];
  selectedCategory?: string | null;
}

const Timeline: React.FC<TimelineProps> = ({ posts, selectedCategory }) => {
  const filteredData = selectedCategory
    ? posts.filter((item) => item.category === selectedCategory)
    : posts;

  return (
    <div className="timeline">
      {filteredData.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="metadata">
            <span className="category">{post.category}</span>
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="date">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
