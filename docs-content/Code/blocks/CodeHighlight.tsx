import React from 'react';
import '../styles/styles.css';

export default function CodeHighlight() {
  return (
    <div className='mockup-code'>
      <div className='three-dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <pre>
        <code>~ npm i axios</code>
      </pre>
      <pre>
        <code>~ installing...</code>
      </pre>
      <pre className='danger'>
        <code>~ error</code>
      </pre>
    </div>
  );
}
