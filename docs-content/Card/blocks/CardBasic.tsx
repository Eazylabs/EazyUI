import React from 'react';
import '../styles/style.css';

export default function CardBasic() {
  return (
    <div className='card'>
      <div className='card-img'>Image</div>
      <div className='card-body'>
        <h3>Shoes!</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <button className='btn btn-primary'>Add</button>
      </div>
    </div>
  );
}
