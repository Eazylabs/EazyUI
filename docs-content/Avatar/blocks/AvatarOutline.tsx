import React from 'react';
import '../styles/style.css';

export default function AvatarOutline() {
  return (
    <div className='avatar-wrapper'>
      <div className='avatar avatar-outline avatar-circle'></div>
      <div className='avatar avatar-outline avatar-rounded'></div>
      <div className='avatar avatar-outline avatar-square'></div>
    </div>
  );
}
