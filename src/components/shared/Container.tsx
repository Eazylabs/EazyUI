import React from 'react';

export default function Container({ children, role, ...attr }) {
  return role == 'button' ? (
    <button {...attr}>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      {children}
    </button>
  ) : (
    <div {...attr} role='button'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      {children}
    </div>
  );
}
