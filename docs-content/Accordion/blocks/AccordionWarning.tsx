import React from "react";
import "../styles/style.css";

export default function AccordionWarning() {
  return (
    <div>
      <details className="accordion accordion-warning">
        <summary className="accordion-title">
          What's an accordion?
          <div className="chevron-icon"></div>
        </summary>
        <div className="content-wrapper">
          <p className="accordion-desc">
            An accordion is a list of headers that hide or reveal additional
            content when selected/opened. You may see them often on FAQ pages,
            where it makes it easy for users to scan the list of questions
            without getting distracted by answers and a lot of text, and giving
            them control by clicking on the questions that pertain to them.
          </p>
        </div>
      </details>
    </div>
  );
}
