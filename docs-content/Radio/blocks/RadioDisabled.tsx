import React from 'react';
import '../styles/style.css';

export default function RadioDisabled() {
  return (
    <div className='form-control'>
      <input type='radio' name='disabled' className='radio radio-neu' checked disabled />
      <input type='radio' name='disabled' className='radio radio-neu' disabled />
    </div>
  );
}
