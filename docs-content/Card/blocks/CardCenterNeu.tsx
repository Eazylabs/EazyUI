import React from 'react';
import '../styles/style.css';

export default function CardCenterNeu() {
  return (
    <div className='card card-neu'>
      <div className='card-img'>Image</div>
      <div className='card-body card-center'>
        <h3>Shoes!</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <button className='btn btn-neu'>Add</button>
      </div>
    </div>
  );
}
