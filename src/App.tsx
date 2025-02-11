import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { posts } from "./data/samplePosts";
import type { Post } from "./types/Post";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";
import ThemeToggle from "./components/ThemeToggle";
import LoginButton from "./components/LoginButton";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedTag(null); // カテゴリー選択時にタグ選択をリセット
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setSelectedCategory(null); // タグ選択時にカテゴリー選択をリセット
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory) {
      return post.category === selectedCategory;
    }
    if (selectedTag) {
      return post.tags.includes(selectedTag);
    }
    return true;
  });

  return (
    <Router>
      <div className="app">
        <header className="flex justify-between items-center p-4">
          <LoginButton />
          <ThemeToggle />
        </header>
        <div className="flex">
          <Sidebar
            onCategoryClick={handleCategoryClick}
            onTagClick={handleTagClick}
            selectedCategory={selectedCategory}
            selectedTag={selectedTag}
          />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Timeline posts={filteredPosts} />} />
              <Route
                path="/timeline/:category"
                element={<TimelineWithCategory />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

const TimelineWithCategory = () => {
  const { category } = useParams();
  // postsをフィルタリングして渡す
  const filteredPosts = posts.filter((post) =>
    category ? post.category === category : true
  );
  return <Timeline posts={filteredPosts} selectedCategory={category} />;
};

export default App;
