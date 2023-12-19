import React from 'react';
import '../styles/style.css';

export default function SwapNeuOn() {
  return (
    <div className='swap'>
      <input type='checkbox' name='swapneuon' id='swapneuon' />
      <label htmlFor='swapneuon' className='swap-label-block neu'>
        <span>ON</span>
        <span>OFF</span>
      </label>
    </div>
  );
}
