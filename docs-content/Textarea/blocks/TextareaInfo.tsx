import React from 'react';
import '../styles/style.css';

export default function TextareaInfo() {
  return (
    <div className='form-control'>
      <textarea
        name='message'
        id='message'
        cols={30}
        rows={10}
        placeholder='Your message...'
        className='textarea textarea-info'
      ></textarea>
      <label htmlFor='message' className='label-input'>
        Your message...
      </label>
    </div>
  );
}
