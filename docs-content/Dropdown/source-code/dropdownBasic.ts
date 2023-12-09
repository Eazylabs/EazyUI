import DropdownBasic from '../blocks/DropdownBasic';

export const DROPDOWNBASIC = {
  html: `<div className='dropdown'>
    <button className='btn btn-basic'>Hover me!</button>
    <div className='dropdown-panel'>
        <div className='dropdown-item'>item 1</div>
        <div className='dropdown-item'>item 2</div>
        <div className='dropdown-item'>item 3</div>
        <div className='dropdown-item'>item 4</div>
        <div className='dropdown-item'>item 5</div>
    </div>
</div>`,
  css: `.dropdown {
  position: relative;
}

.dropdown-panel {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dropdown:hover .dropdown-panel {
  display: block;
}

.dropdown-item {
  padding: 6px 16px;
  margin-bottom: 8px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  border-radius: 4px;
}`,
  element: DropdownBasic,
};
