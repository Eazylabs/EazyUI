import React from 'react';
import '../styles/style.css';

export default function AvatarVariants() {
  return (
    <div className='avatar-wrapper'>
      <div className='avatar avatar-circle'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div className='avatar avatar-rounded'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div className='avatar avatar-square'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
    </div>
  );
}
