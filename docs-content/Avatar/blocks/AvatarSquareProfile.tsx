import React from 'react';
import '../styles/style.css';

export default function AvatarSquareProfile() {
  return (
    <div className='avatar-wrapper'>
      <div className='avatar avatar-square'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div className="text">
        <h2>
          Kanon Shizaki
        </h2>
        <p>Roselia Keyboard</p>
      </div>
    </div>
  );
}
