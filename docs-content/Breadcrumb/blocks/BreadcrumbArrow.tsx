import React from 'react';
import '../styles/style.css';

export default function BreadcrumbArrow() {
  return (
    <ul className='breadcrumb arrow'>
      <li>
        <a href='#'>Docs</a>
      </li>
      <li>
        <a href='#'>Component</a>
      </li>
      <li>
        <a href='#'>Breadcrumbs</a>
      </li>
    </ul>
  );
}
