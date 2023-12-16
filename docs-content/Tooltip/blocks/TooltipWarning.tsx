import React from 'react';
import '../styles/style.css';

export default function TooltipWarning() {
    return (
        <button className='btn btn-neu tooltip warning' data-tooltip='Hello!'>Hover Me</button>
    );
}