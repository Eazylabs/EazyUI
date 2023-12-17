import React from 'react';
import '../styles/style.css';

export default function AvatarOutline() {
  return (
    <div className='avatar-wrapper'>
      <div className='avatar avatar-outline avatar-circle'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div className='avatar avatar-outline avatar-rounded'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div className='avatar avatar-outline avatar-square'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
    </div>
  );
}
