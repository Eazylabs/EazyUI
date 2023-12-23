import React from 'react';
import '../styles/styles.css';

export default function CodeBasic() {
  return (
    <div className='mockup-code'>
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
