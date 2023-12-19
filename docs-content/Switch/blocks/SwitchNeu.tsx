import React from 'react';
import '../styles/style.css';

export default function SwitchNeu() {
  return (
    <div className='switch-btn'>
      <input type='checkbox' className='switch' />
      <span className='switch-indicator switch-neu'></span>
    </div>
  );
}
