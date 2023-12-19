import React from 'react';
import '../styles/style.css';

export default function TextareaSuccess() {
  return (
    <div className='form-control'>
      <textarea
        name='message'
        id='message2'
        cols={30}
        rows={10}
        placeholder='Your message...'
        className='textarea textarea-success'
      ></textarea>
      <label htmlFor='message2' className='label-input'>
        Your message...
      </label>
    </div>
  );
}
