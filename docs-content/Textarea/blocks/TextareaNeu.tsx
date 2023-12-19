import React from 'react';
import '../styles/style.css';

export default function TextareaNeu() {
  return (
    <div className='form-control'>
      <textarea
        name='message'
        id='message5'
        cols={30}
        rows={10}
        placeholder='Your message...'
        className='textarea textarea-neu'
      ></textarea>
      <label htmlFor='message5' className='label-input'>
        Your message...
      </label>
    </div>
  );
}
