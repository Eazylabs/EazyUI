import React from 'react';
import '../styles/style.css';

export default function RadioInfo() {
  return (
    <div className='form-control'>
      <input type='radio' name='info' className='radio radio-info' checked />
      <input type='radio' name='info' className='radio radio-info' />
    </div>
  );
}
