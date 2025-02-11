import React, { useState } from "react";

function ReactCounter({ start }) {
  const [count, setCount] = useState(start);

  const incrementCount = async () => {
    const response = await fetch("/increment", { method: "POST" });
    const newCount = parseInt(await response.text());
    setCount(newCount);
  };

  return (
    <div className="counter">
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
      <span className="count">{count}</span>
    </div>
  );
}

export default ReactCounter;
