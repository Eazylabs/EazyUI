import Collapse from "../blocks/Collapse";

export const COLLAPSE = {
  html: `<div class="collapse">
  <button type="button" class="btn info collapse-btn">Open Collapse</button>
  <div class="collapse-content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    voluptatum, quibusdam, quos, voluptates voluptate quia quae
    exercitationem quod doloribus quas voluptatibus. Quisquam voluptatum,
    quibusdam, quos, voluptates voluptate quia quae exercitationem quod
    doloribus quas voluptatibus.
  </div>
</div>`,
  css: `.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.collapse {
  position: relative;
}

.collapse-content {
  position: absolute;
  top: 125%;
  left: -50%;
  margin-left: -50%;
  min-width: 592px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-16px);
  transition: all 150ms ease-in-out;
  box-shadow: 0px 4px 4px 0px #C3C6D1;
  text-align: justify;
}

.collapse-content.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

@media screen and (max-width: 768px) {
  .collapse-content {
    min-width: 100%;
    left: 0;
    margin-left: 0;
  }
}`,
  javascript: `const btnCollapse = document.querySelector(".collapse-btn");
const collapseContent = document.querySelector(".collapse-content");

btnCollapse.addEventListener("click", () => {
  collapseContent.classList.toggle("show");
});

document.addEventListener('click', (e) => {
  if(!collapseContent.contains(e.target) && !btnCollapse.contains(e.target)){
    collapseContent.classList.remove("show");
  }
});`,
  element: Collapse,
};
