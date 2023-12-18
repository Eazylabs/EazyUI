import React from 'react';
import '../styles/style.css';

export default function SelectNeu() {
  return (
    <select className='select select-neu'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
