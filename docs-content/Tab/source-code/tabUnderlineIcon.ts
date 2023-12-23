import TabUnderlineIcon from "../blocks/TabUnderlineIcon";

export const TABUNDERLINEICON = {
  html:`<div class="tab tab-underline">
  <button class="tab-btn active">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        d="M5.0709 7.5H6.04998V4.5H5.0709V7.5ZM5.56044 3.5C5.69914 3.5 5.81549 3.452 5.90948 3.356C6.00347 3.26 6.0503 3.14133 6.04998 3C6.04998 2.85833 6.00298 2.7395 5.90899 2.6435C5.815 2.5475 5.69881 2.49967 5.56044 2.5C5.42173 2.5 5.30539 2.548 5.21139 2.644C5.1174 2.74 5.07057 2.85867 5.0709 3C5.0709 3.14167 5.11789 3.2605 5.21188 3.3565C5.30588 3.4525 5.42206 3.50033 5.56044 3.5ZM5.56044 10C4.88324 10 4.24684 9.86867 3.65123 9.606C3.05562 9.34333 2.53753 8.98717 2.09694 8.5375C1.65636 8.0875 1.30764 7.55833 1.0508 6.95C0.793951 6.34167 0.665365 5.69167 0.665039 5C0.665039 4.30833 0.793625 3.65833 1.0508 3.05C1.30797 2.44167 1.65668 1.9125 2.09694 1.4625C2.53753 1.0125 3.05562 0.656333 3.65123 0.394C4.24684 0.131667 4.88324 0.000333333 5.56044 0C6.23763 0 6.87403 0.131333 7.46964 0.394C8.06525 0.656667 8.58334 1.01283 9.02393 1.4625C9.46452 1.9125 9.81339 2.44167 10.0706 3.05C10.3277 3.65833 10.4562 4.30833 10.4558 5C10.4558 5.69167 10.3272 6.34167 10.0701 6.95C9.8129 7.55833 9.46419 8.0875 9.02393 8.5375C8.58334 8.9875 8.06525 9.34383 7.46964 9.6065C6.87403 9.86917 6.23763 10.0003 5.56044 10Z"
        fill="#183153"
      />
    </svg>
    <span>Personal</span>
  </button>
  <button class="tab-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        d="M2.57987 4L5.8451 6L10.7405 3L5.8451 0L0.949707 3H5.8451V4H2.57987ZM0.949707 4V8L1.92879 6.89V4.6L0.949707 4ZM5.8451 10L3.39741 8.5L2.41833 7.9V4.9L5.8451 7L9.27188 4.9V7.9L5.8451 10Z"
        fill="#183153"
      />
    </svg>
    <span>Education</span>
  </button>
  <button class="tab-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        d="M2 6H3.225L6.3625 2.8875L5.1125 1.6375L2 4.775V6ZM4.25 6H8V5H5.25L4.25 6ZM0 10V0H10V8H2L0 10Z"
        fill="#183153"
      />
    </svg>
    <span>Review</span>
  </button>
</div>`,
  css:`.tab {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none !important;
  width: fit-content;
}

.tab-button {
  color: #183153;
  background-color: #fff;
}

.tab-btn {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.tab-underline .tab-btn {
  border-radius: 0;
  border-bottom: 2px solid transparent;
}

.tab-underline .tab-btn.active {
  color: #183153;
  border-color: #183153;
}`,
  javascript:`const tabBtn = document.querySelectorAll(".tab-btn");

tabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});`,
  element: TabUnderlineIcon
}
