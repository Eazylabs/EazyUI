import React from 'react';
import '../styles/style.css';

export default function TooltipDanger() {
    return (
        <button className='btn btn-neu tooltip danger' data-tooltip='Hello!'>Hover Me</button>
    );
}