import React from 'react';
import '../styles/style.css';

export default function MenuCollapsible() {
  return (
    <ul className='menus'>
      <li className='menu-item'>Item 1</li>
      <details className='submenu-parent'>
        <summary className='menu-item menu-title'>
          Item 2<div className='chevron-icon'></div>
        </summary>
        <ul className='submenu-children'>
          <li className='menu-item'>Sub item 1</li>
          <li className='menu-item'>Sub item 2</li>
          <li className='menu-item'>Sub item 3</li>
          <details className='submenu-parent'>
            <summary className='menu-item menu-title'>
              Sub item 4<div className='chevron-icon'></div>
            </summary>
            <ul className='submenu-children'>
              <li className='menu-item'>Sub item 1</li>
              <li className='menu-item'>Sub item 2</li>
              <li className='menu-item'>Sub item 3</li>
            </ul>
          </details>
        </ul>
      </details>
      <li className='menu-item'>Item 3</li>
    </ul>
  );
}
