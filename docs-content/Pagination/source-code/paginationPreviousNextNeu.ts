import PaginationPreviousNextNeu from "../blocks/PaginationPreviousNextNeu";

export const PAGINATIONPREVIOUSNEXTNEU = {
  html:`<div class="pagination neu">
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
    <span>Previous</span>
  </button>
  <button type="button" class="active">1</button>
  <button type="button">2</button>
  <button type="button">...</button>
  <button type="button">9</button>
  <button type="button">10</button>
  <button type="button">
    <span>Next</span>
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
  css:`.paginations {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  color: #c3c6d1;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.paginations.neu {
  box-shadow: 4px 4px 0 0 #183153;
}

.paginations svg {
  scale: 2;
}
.paginations button {
  padding: 12px 16px;
  cursor: pointer;
  color: #c3c6d1;
}

.paginations button:not(:nth-last-child(1)) {
  border-right: 1px solid #ebebeb;
}

.paginations button:first-child {
  border-radius: 4px 0 0 4px;
}

.paginations button:last-child {
  border-radius: 0 4px 4px 0;
}

.paginations.neu button {
  border-color: #183153;
}

.paginations.neu button.active {
  background-color: #183153;
  color: #fff;
}

.paginations.neu button:hover {
  background-color: #183153;
  color: #fff;
}`,
  element: PaginationPreviousNextNeu
}
