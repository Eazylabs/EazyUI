import React from 'react';
import '../styles/style.css';

export default function InputWarning() {
  return (
    <div className='form-control'>
      <input type='text' id='email3' className='text-input input-warning' autoComplete='off' placeholder='Email' />
      <label htmlFor='email3' className='label-input'>
        Email
      </label>
    </div>
  );
}
