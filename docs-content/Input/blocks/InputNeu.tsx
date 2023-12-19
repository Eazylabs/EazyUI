import React from 'react';
import '../styles/style.css';

export default function InputNeu() {
  return (
    <div className='form-control'>
      <input type='text' id='email5' className='text-input input-neu' autoComplete='off' placeholder='Email' />
      <label htmlFor='email5' className='label-input'>
        Email
      </label>
    </div>
  );
}
