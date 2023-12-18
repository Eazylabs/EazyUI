import React from 'react';
import '../styles/style.css';

export default function SelectWarning() {
  return (
    <select className='select select-warning'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
