import React from 'react';
import '../styles/style.css';

export default function InputDanger() {
  return (
    <div className='form-control'>
      <input type='text' id='email4' className='text-input input-danger' autoComplete='off' placeholder='Email' />
      <label htmlFor='email4' className='label-input'>
        Email
      </label>
    </div>
  );
}
