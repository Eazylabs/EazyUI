import React from 'react';
import '../styles/style.css';

export default function InputInfo() {
  return (
    <div className='form-control'>
      <input type='text' id='email' className='text-input input-info' autoComplete='off' placeholder='Email' />
      <label htmlFor='email' className='label-input'>
        Email
      </label>
    </div>
  );
}
