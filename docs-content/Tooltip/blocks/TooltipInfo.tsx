import React from 'react';
import '../styles/style.css';

export default function TooltipInfo() {
    return (
        <button className='btn btn-neu tooltip info' data-tooltip='Hello!'>Hover Me</button>
    );
}