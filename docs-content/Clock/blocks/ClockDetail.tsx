import React, { useCallback, useEffect, useState } from 'react';
import time from '../utils/time';

export default function ClockDetail() {
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
    <div className='clock'>
      <h3>
        <span id='hours'>{twoDigits(hours)}</span> Hours
      </h3>
      <h3>
        <span id='minutes'>{twoDigits(minutes)}</span> Min
      </h3>
      <h3>
        <span id='seconds'>{twoDigits(seconds)}</span> Sec
      </h3>
    </div>
  );
}
