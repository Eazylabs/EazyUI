import DropdownSection from '../blocks/DropdownSection';

export const DROPDOWNSECTION = {
  html: `<div className='dropdown'>
    <button className='btn btn-basic'>Hover me!</button>
    <div className='dropdown-panel'>
        <div className='dropdown-section'>
            <div className='dropdown-section-title'>Section 1</div>
            <div className='dropdown-item'>item 1</div>
            <div className='dropdown-item'>item 2</div>
            <div className='dropdown-item'>item 3</div>
        </div>
        <div className='dropdown-section'>
            <div className='dropdown-section-title'>Section 2</div>
            <div className='dropdown-item'>item 4</div>
            <div className='dropdown-item'>item 5</div>
            <div className='dropdown-item'>item 6</div>
        </div>
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
}

.dropdown-section div:first-child {
  color: #0ea5e9;
}

.dropdown-section:not(:last-child) {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 8px;
}`,
  element: DropdownSection,
};
