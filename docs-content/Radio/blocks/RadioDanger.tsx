import React from 'react';
import '../styles/style.css';

export default function RadioDanger() {
  return (
    <div className='form-control'>
      <input type='radio' name='danger' className='radio radio-danger' checked />
      <input type='radio' name='danger' className='radio radio-danger' />
    </div>
  );
}
