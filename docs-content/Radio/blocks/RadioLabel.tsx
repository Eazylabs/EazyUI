import React from 'react';
import '../styles/style.css';

export default function RadioLabel() {
  return (
    <>
      <div className='form-control'>
        <input type='radio' id='left' name='text' className='radio radio-info' checked />
        <label htmlFor='left'>Hello</label>
      </div>
      <div className='form-control'>
        <input type='radio' id='right' name='text' className='radio radio-info' />
        <label htmlFor='right'>World</label>
      </div>
    </>
  );
}
