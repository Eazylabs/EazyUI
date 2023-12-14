import React from 'react';
import '../styles/style.css';

export default function DropdownSection() {
  return (
    <div className='dropdown'>
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
    </div>
  );
}
