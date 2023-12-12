import DropdownSectionNeu from '../blocks/DropdownSectionNeu';

export const DROPDOWNSECTIONNEU = {
  html: `<div class='dropdown dropdown-neu'>
    <button class='btn btn-neu'>Hover me!</button>
    <div class='dropdown-panel'>
        <div class='dropdown-section'>
            <div class='dropdown-section-title'>Section 1</div>
            <div class='dropdown-item'>item 1</div>
            <div class='dropdown-item'>item 2</div>
            <div class='dropdown-item'>item 3</div>
        </div>
        <div class='dropdown-section'>
            <div class='dropdown-section-title'>Section 2</div>
            <div class='dropdown-item'>item 4</div>
            <div class='dropdown-item'>item 5</div>
            <div class='dropdown-item'>item 6</div>
        </div>
    </div>
</div>`,
  css: `.dropdown {
  position: relative;
}

.dropdown-neu .dropdown-panel {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
  z-index: 1;
}

.dropdown:hover .dropdown-panel {
  display: block;
}

.dropdown-item {
  padding: 6px 16px;
  margin-bottom: 8px;
}

.dropdown-neu .dropdown-section div:first-child {
  color: #183153;
}

.dropdown-section:not(:last-child) {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 8px;
}

.dropdown-neu .dropdown-item:hover {
  background-color: #183153;
  color: #fff;
  border-radius: 4px;
}`,
  element: DropdownSectionNeu,
};
