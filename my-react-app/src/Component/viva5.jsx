import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>👍 Likes: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px" }}
      >
        👍 Like
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default LikeButton;