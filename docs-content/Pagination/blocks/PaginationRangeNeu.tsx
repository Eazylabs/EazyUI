import React from "react";
import "../styles/style.css";

export default function PaginationRangeNeu() {
  return (
    <div className="paginations neu">
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m14 7l-5 5l5 5"
          />
        </svg>
      </button>
      <div className="pagination-range">Page 1 of 10</div>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <g transform="translate(24 0) scale(-1 1)">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m14 7l-5 5l5 5"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
