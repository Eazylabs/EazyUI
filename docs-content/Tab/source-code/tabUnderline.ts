import TabUnderline from "../blocks/TabUnderline";

export const TABUNDERLINE = {
  html: `<div class="tab tab-underline">
  <button class="tab-btn active">Tab 1</button>
  <button class="tab-btn">Tab 2</button>
  <button class="tab-btn">Tab 3</button>
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
  javascript: `const tabBtn = document.querySelectorAll(".tab-btn");

tabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});`,
  element: TabUnderline
}
