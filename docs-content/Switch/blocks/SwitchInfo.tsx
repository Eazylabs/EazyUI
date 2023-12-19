import React from 'react';
import '../styles/style.css';

export default function SwitchInfo() {
  return (
    <div className='switch-btn'>
      <input type='checkbox' className='switch' />
      <span className='switch-indicator switch-info'></span>
    </div>
  );
}
