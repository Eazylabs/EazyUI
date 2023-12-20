import MenuBasic from '../blocks/MenuBasic';

export const MENUBASIC = {
  html: `<ul class="menu">
  <li class="menu-item">Item 1</li>
  <li class="menu-item">Item 2</li>
  <li class="menu-item">Item 3</li>
</ul>`,
  css: `.menu {
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  width: min(100%, 224px);
}

.menu-item {
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-item:hover {
  background-color: #f5f5f5;
}`,
  element: MenuBasic,
};
