import React from 'react';
import '../styles/style.css';

export default function ProgressDanger() {
  return (
    <div className='wrapper'>
      <div className='progress progress-danger' data-value='0'></div>
      <div className='progress progress-danger' data-value='25'></div>
      <div className='progress progress-danger' data-value='50'></div>
      <div className='progress progress-danger' data-value='75'></div>
      <div className='progress progress-danger' data-value='100'></div>
    </div>
  );
}
