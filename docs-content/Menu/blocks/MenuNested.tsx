import React from 'react';
import '../styles/style.css';

export default function MenuNested() {
  return (
    <ul className='menus'>
      <li className='menu-item'>Item 1</li>
      <li className='menu-item menu-title'>
        Item 2 <div className='chevron-icon'></div>
        <ul className='menus nested-menu'>
          <li className='menu-item'>Sub item 1</li>
          <li className='menu-item'>Sub item 2</li>
          <li className='menu-item'>Sub item 3</li>
        </ul>
      </li>
      <li className='menu-item'>Item 3</li>
    </ul>
  );
}
