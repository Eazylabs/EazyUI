import React from 'react';
import '../styles/style.css';

export default function TooltipSuccess() {
    return (
        <button className='btn btn-neu tooltip success' data-tooltip='Hello!'>Hover Me</button>
    );
}