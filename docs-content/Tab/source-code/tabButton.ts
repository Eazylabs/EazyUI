import TabButton from "../blocks/TabButton";

export const TABBUTTON = {
  html: `<div class="tab tab-button">
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

.tab-button .tab-btn.active {
  background-color: #183153;
  color: #fff;
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
  element: TabButton
}
