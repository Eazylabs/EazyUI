import React from 'react';
import '../styles/style.css';

export default function RadioSuccess() {
  return (
    <div className='form-control'>
      <input type='radio' name='success' className='radio radio-success' checked />
      <input type='radio' name='success' className='radio radio-success' />
    </div>
  );
}
