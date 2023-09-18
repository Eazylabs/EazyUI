import React from 'react';
import { SKELETON } from '@site/src/constant';
import { ISkeleton } from '@site/src/utils/interfaces';

function CardComponent({ title, category, img, color }: ISkeleton) {
  return (
    <div className='card-component'>
      <div className='card-component-image'>
        <img src={img} alt={title} />
      </div>
      <div className='card-component-title'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export function CardDisplay() {
  return (
    <div>
      {SKELETON.map((item, index) => {
        return <CardComponent key={index} {...item} />;
      })}
    </div>
  );
}
