import React from 'react';
import '../styles/style.css';

export default function SelectSuccess() {
  return (
    <select className='select select-success'>
      <option selected disabled>
        Pick your language
      </option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>Python</option>
    </select>
  );
}
