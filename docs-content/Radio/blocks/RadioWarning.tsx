import React from 'react';
import '../styles/style.css';

export default function RadioWarning() {
  return (
    <div className='form-control'>
      <input type='radio' name='warning' className='radio radio-warning' checked />
      <input type='radio' name='warning' className='radio radio-warning' />
    </div>
  );
}
