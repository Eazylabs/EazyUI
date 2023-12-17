import React from 'react';
import '../styles/style.css';

export default function AlertWarning() {
  return (
    <div className='alert warning'>
      <svg xmlns='http://www.w3.org/2000/svg' width='28' height='26' viewBox='0 0 28 26' fill='none'>
        <path
          d='M13.9999 0.75C14.7765 0.75 15.4929 1.16016 15.8867 1.83281L27.6992 21.9578C28.0984 22.6359 28.0984 23.4727 27.7101 24.1508C27.3218 24.8289 26.5945 25.25 25.8124 25.25H2.18743C1.4054 25.25 0.67806 24.8289 0.289778 24.1508C-0.0985029 23.4727 -0.0930341 22.6305 0.300716 21.9578L12.1132 1.83281C12.507 1.16016 13.2234 0.75 13.9999 0.75ZM13.9999 7.75C13.2726 7.75 12.6874 8.33516 12.6874 9.0625V15.1875C12.6874 15.9148 13.2726 16.5 13.9999 16.5C14.7273 16.5 15.3124 15.9148 15.3124 15.1875V9.0625C15.3124 8.33516 14.7273 7.75 13.9999 7.75ZM15.7499 20C15.7499 19.5359 15.5656 19.0908 15.2374 18.7626C14.9092 18.4344 14.4641 18.25 13.9999 18.25C13.5358 18.25 13.0907 18.4344 12.7625 18.7626C12.4343 19.0908 12.2499 19.5359 12.2499 20C12.2499 20.4641 12.4343 20.9092 12.7625 21.2374C13.0907 21.5656 13.5358 21.75 13.9999 21.75C14.4641 21.75 14.9092 21.5656 15.2374 21.2374C15.5656 20.9092 15.7499 20.4641 15.7499 20Z'
          fill='#183153'
        />
      </svg>
      <span>A simple alert for showing message.</span>
    </div>
  );
}
