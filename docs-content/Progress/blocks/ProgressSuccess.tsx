import React from 'react';
import '../styles/style.css';

export default function ProgressSuccess() {
  return (
    <div className='wrapper'>
      <div className='progress progress-success' data-value='0'></div>
      <div className='progress progress-success' data-value='25'></div>
      <div className='progress progress-success' data-value='50'></div>
      <div className='progress progress-success' data-value='75'></div>
      <div className='progress progress-success' data-value='100'></div>
    </div>
  );
}
