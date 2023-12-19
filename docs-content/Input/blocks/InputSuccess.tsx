import React from 'react';
import '../styles/style.css';

export default function InputSuccess() {
  return (
    <div className='form-control'>
      <input type='text' id='email2' className='text-input input-success' autoComplete='off' placeholder='Email' />
      <label htmlFor='email2' className='label-input'>
        Email
      </label>
    </div>
  );
}
