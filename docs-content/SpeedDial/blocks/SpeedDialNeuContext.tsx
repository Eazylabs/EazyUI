import React from 'react';
import '../styles/style.css';

export default function SpeedDialNeuContext() {
  return (
    <div className='speeddial'>
      <button className='speeddial-btn neu'>
        <svg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='0 0 448 512' fill='white'>
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      </button>
      <div className='speeddial-menu context neu'>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </div>
  );
}
