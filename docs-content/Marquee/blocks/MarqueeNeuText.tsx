import React from 'react';
import '../styles/style.css';

export default function MarqueeNeuText() {
  return (
    <div className='marquee neu text-running'>
      <div className='marquee-track'>
        <div className='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM 1</div>
        <div className='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM 2</div>
        <div className='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM 3</div>
        <div className='content'>LOREM IPSUM LOREM IPSUM LOREM IPSUM 4</div>
      </div>
    </div>
  );
}
