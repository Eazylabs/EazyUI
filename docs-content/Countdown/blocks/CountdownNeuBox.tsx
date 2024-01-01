import React, { useCallback, useEffect, useState } from 'react';
import time from '../utils/time';
import '../styles/style.css';

export default function CountdownNeuBox() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const { seconds, minutes, hours } = time();
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const twoDigits = useCallback((num) => {
    return String(num).padStart(2, '0');
  }, []);

  return (
    <div className='countdown'>
      <div className='neu'>
        <h1 id='hours'>{twoDigits(hours)}</h1>
        <p>Hours</p>
      </div>
      <div className='neu'>
        <h1 id='minutes'>{twoDigits(minutes)}</h1>
        <p>Minutes</p>
      </div>
      <div className='neu'>
        <h1 id='seconds'>{twoDigits(seconds)}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
}
