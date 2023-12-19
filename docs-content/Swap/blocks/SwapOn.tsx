import React from 'react';
import '../styles/style.css';

export default function SwapOn() {
  return (
    <div className='swap'>
      <input type='checkbox' name='swap-on' id='swap-on' />
      <label htmlFor='swap-on' className='swap-label-circle primary'>
        <span>ON</span>
        <span>OFF</span>
      </label>
    </div>
  );
}
