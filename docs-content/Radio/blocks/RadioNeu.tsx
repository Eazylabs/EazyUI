import React from 'react';
import '../styles/style.css';

export default function RadioNeu() {
  return (
    <div className='form-control'>
      <input type='radio' name='neu' className='radio radio-neu' checked />
      <input type='radio' name='neu' className='radio radio-neu' />
    </div>
  );
}
