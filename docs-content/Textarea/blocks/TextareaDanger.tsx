import React from 'react';
import '../styles/style.css';

export default function TextareaDanger() {
  return (
    <div className='form-control'>
      <textarea
        name='message'
        id='message4'
        cols={30}
        rows={10}
        placeholder='Your message...'
        className='textarea textarea-danger'
      ></textarea>
      <label htmlFor='message4' className='label-input'>
        Your message...
      </label>
    </div>
  );
}
