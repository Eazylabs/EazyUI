import React from 'react';
import '../styles/style.css';

export default function ProgressInfo() {
  return (
    <div className='wrapper'>
      <div className='progress progress-info' data-value='0'></div>
      <div className='progress progress-info' data-value='25'></div>
      <div className='progress progress-info' data-value='50'></div>
      <div className='progress progress-info' data-value='75'></div>
      <div className='progress progress-info' data-value='100'></div>
    </div>
  );
}
