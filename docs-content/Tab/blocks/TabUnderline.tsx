import React, { useState } from "react";
import "../styles/style.css";

export default function TabUnderline() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="tab tab-underline">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-btn ${active === index && "active"}`}
          onClick={() => handleClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
