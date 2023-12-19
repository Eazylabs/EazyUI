import React from 'react';
import '../styles/style.css';

export default function TextareaWarning() {
  return (
    <div className='form-control'>
      <textarea
        name='message'
        id='message3'
        cols={30}
        rows={10}
        placeholder='Your message...'
        className='textarea textarea-warning'
      ></textarea>
      <label htmlFor='message3' className='label-input'>
        Your message...
      </label>
    </div>
  );
}
