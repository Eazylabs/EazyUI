import MenuNested from '../blocks/MenuNested';

export const MENUNESTED = {
  html: `<ul class="menu">
  <li class="menu-item">Item 1</li>
  <li class="menu-item menu-title">
    Item 2 <div class="chevron-icon"></div>
    <ul class="menus nested-menu">
      <li class="menu-item">Sub item 1</li>
      <li class="menu-item">Sub item 2</li>
      <li class="menu-item">Sub item 3</li>
    </ul>
  </li>
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
  position: relative;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0 !important;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.chevron-icon {
  height: 24px;
  width: 24px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMTEuMjk5OEw5Ljg5OTk1IDUuNTk5OEM5LjQ5OTk1IDUuMTk5OCA4Ljg5OTk1IDUuMTk5OCA4LjQ5OTk1IDUuNTk5OEM4LjA5OTk1IDUuOTk5OCA4LjA5OTk1IDYuNTk5OCA4LjQ5OTk1IDYuOTk5OEwxMy40IDExLjg5OThMOC40OTk5NSAxNi43OTk4QzguMjk5OTUgMTYuOTk5OCA4LjE5OTk1IDE3LjE5OTggOC4xOTk5NSAxNy40OTk4QzguMTk5OTUgMTguMDk5OCA4LjU5OTk1IDE4LjQ5OTggOS4xOTk5NSAxOC40OTk4QzkuNDk5OTUgMTguNDk5OCA5LjY5OTk1IDE4LjM5OTggOS44OTk5NSAxOC4xOTk4TDE1LjYgMTIuNDk5OEMxNS45IDEyLjI5OTggMTUuOSAxMS42OTk4IDE1LjUgMTEuMjk5OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=');
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 150ms ease-in;
}

.menu-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 8px 12px;
  cursor: pointer;
  list-style: none;
}

.nested-menu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 10px;
}

.menu-item:hover > .chevron-icon {
  transform: rotate(90deg);
}

.menu-item:hover > .nested-menu {
  display: block;
}`,
  element: MenuNested,
};
