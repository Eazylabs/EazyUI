import DrawerRight from "../blocks/DrawerRight";

export const DRAWERRIGHT = {
  html: `<button type="button" class="btn-drawer">Click Me</button>
<div class="drawer right">
  <div class="drawer-backdrop"></div>
  <div class="drawer-content">
    <div class="drawer-top">
      <div>Drawer</div>
      <button type="button" class="btn-close">X</button>
    </div>
    <div>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
    </div>
  </div>
</div>`,
  css: `.drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 50dvw;
  padding: 16px;
  background: #fff;
  z-index: 1;
}

.drawer.right {
  right: -50dvw;
}

.drawer.right.active {
  right: 0;
}

.drawer.active .drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -2;
}

.drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-basic {
  background-color: #4ba3e3;
  color: #fff;
}

.btn-basic:hover {
  background-color: #348fd0;
}

@media (min-width: 768px) {
  .drawer {
    width: 25dvw;
  }

  .drawer.right.active .drawer-backdrop {
    right: 25dvw;
  }
}`,
  javascript: `const drawer = document.querySelector(".drawer");
const drawerContent = document.querySelector(".drawer-content");
const btnDrawer = document.querySelector(".btn-drawer");
const btnClose = document.querySelector(".btn-close");

btnDrawer.addEventListener("click", () => {
  drawer.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
  drawer.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!drawerContent.contains(e.target) && !btnDrawer.contains(e.target)) {
    drawer.classList.remove("active");
  }
}`,
  element: DrawerRight,
};
