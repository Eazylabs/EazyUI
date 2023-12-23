import React from 'react';
import '../styles/styles.css';

export default function CodeMultiLine() {
  return (
    <div className='mockup-code'>
      <div className='three-dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <pre className='text-info'>
        <code>~ npm run dev</code>
      </pre>
      <pre className='text-success'>
        <code>~ npm run dev</code>
      </pre>
      <pre className='text-warning'>
        <code>~ npm run dev</code>
      </pre>
      <pre className='text-danger'>
        <code>~ npm run dev</code>
      </pre>
    </div>
  );
}
