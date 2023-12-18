import React from 'react';
import '../styles/style.css';

export default function SelectDanger() {
  return (
    <select className='select select-danger'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
