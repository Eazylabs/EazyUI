import React from 'react';
import '../styles/style.css';

export default function SelectBorder() {
  return (
    <select className='select select-bordered'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
