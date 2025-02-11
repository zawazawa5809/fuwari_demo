import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

interface SidebarProps {
  onCategoryClick: (category: string) => void;
  onTagClick: (tag: string) => void;
  selectedCategory: string | null;
  selectedTag: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  onCategoryClick,
  onTagClick,
  selectedCategory,
  selectedTag,
}) => {
  const categories = ["Home", "Work", "Personal", "Shopping"];
  const tags = ["Important", "Urgent", "Later", "Done"];

  return (
    <div className="sidebar">
      <div className="categories">
        <h2>Categories</h2>
        {categories.map((category) => (
          <div
            key={category}
            className={`category ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="tags">
        <h2>Tags</h2>
        {tags.map((tag) => (
          <div
            key={tag}
            className={`tag ${selectedTag === tag ? "selected" : ""}`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
