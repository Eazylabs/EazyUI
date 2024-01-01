import React, { useCallback, useEffect, useState } from 'react';
import time from '../utils/time';

export default function Countdown() {
  const [timer, setTimer] = useState(3600);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const { seconds, minutes, hours } = time(timer - 1);
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
      <h2 id='hours'>{twoDigits(hours)} : </h2>
      <h2 id='minutes'>{twoDigits(minutes)} : </h2>
      <h2 id='seconds'>{twoDigits(seconds)}</h2>
    </div>
  );
}
