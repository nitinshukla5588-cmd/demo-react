import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [isDark]);

  return (
    
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ThemeToggle;