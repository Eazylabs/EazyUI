import React from 'react';
import '../styles/style.css';

export default function SelectNoBorder() {
  return (
    <select className='select'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
