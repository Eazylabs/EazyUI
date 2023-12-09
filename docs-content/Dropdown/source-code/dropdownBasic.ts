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

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 44px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .btn-outline {
    background-color: transparent;
    border: 1px solid #4ba3e3;
    color: #4ba3e3;
  }`,
  element: DropdownBasic,
};
