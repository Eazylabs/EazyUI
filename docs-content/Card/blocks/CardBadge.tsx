import React from 'react';
import '../styles/style.css';

export default function CardBadge() {
  return (
    <div className='card'>
      <div className='card-img'>Image</div>
      <div className='card-body'>
        <h3>Shoes!</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-badge'>
          <div className='badges badge-info-outline'>Infomation</div>
          <div className='badges badge-info-outline'>Infomation</div>
        </div>
      </div>
    </div>
  );
}
