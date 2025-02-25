import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../utils/urlHelper";

// If you have plain <a> tags instead of React Router's Link:
// Replace <a href="/some-path"> with <a href={getUrl("some-path")}>

// If you're using React Router's Link, you don't need to change those
// since the basename in BrowserRouter will handle that

// Example:
const Navigation = () => {
  return (
    <nav>
      {/* Links with React Router don't need changes */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* Plain HTML links need the helper */}
      <a href={getUrl("downloads")}>Downloads</a>
      <a href={getUrl("external-link")} target="_blank">
        External
      </a>
    </nav>
  );
};

export default Navigation;
