import React from 'react';
import '../styles/styles.css';

export default function CodeNeu() {
  return (
    <div className='mockup-code code-neu'>
      <div className='three-dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <pre>
        <code>~ npm run dev</code>
      </pre>
    </div>
  );
}
