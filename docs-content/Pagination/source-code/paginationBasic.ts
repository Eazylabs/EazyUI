import PaginationBasic from "../blocks/PaginationBasic";

export const PAGINATIONBASIC = {
html:`<div class="pagination">
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
  <button type="button" class="active">1</button>
  <button type="button">2</button>
  <button type="button">...</button>
  <button type="button">9</button>
  <button type="button">10</button>
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
</div>`,
  css:`.pagination {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  color: #c3c6d1;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.pagination svg {
  scale: 2;
}

.pagination button {
  padding: 12px 16px;
  cursor: pointer;
  color: #c3c6d1;
}

.pagination button:not(:nth-last-child(1)) {
  border-right: 1px solid #ebebeb;
}

.pagination button:first-child {
  border-radius: 4px 0 0 4px;
}

.pagination button:last-child {
  border-radius: 0 4px 4px 0;
}

.pagination button:hover {
  color: #183153;
  background-color: #e2e8f0;
}

.pagination button.active {
  color: #183153;
  background-color: #e2e8f0;
}`,
  element: PaginationBasic
}
