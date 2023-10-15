import React from 'react';

export default function Container({ children, role, mode, ...attr }) {
  return role == 'button' ? (
    <button {...attr}>
      {mode == 'editor' && (
        <>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </>
      )}
      {children}
    </button>
  ) : (
    <div {...attr} role='button'>
      {mode == 'editor' && (
        <>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </>
      )}
      {children}
    </div>
  );
}
