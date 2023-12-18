import React from 'react';
import '../styles/style.css';

export default function SelectInfo() {
  return (
    <select className='select select-info'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
