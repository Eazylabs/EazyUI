import { SKELETON } from '@site/src/constant';
import { ISkeleton } from '@site/src/utils/interfaces';
import clsx from 'clsx';
import React from 'react';
import './style.css';

interface IProps {
  categoryComponent: string;
}

function CardComponent({ title, category, img }: ISkeleton) {
  const cardColor = clsx({
    blue: category == 'action',
    green: category == 'data-display',
    yellow: category == 'data-input',
    purple: category == 'layout',
    pink: category == 'mockup',
    red: category == 'navigation',
  });

  return (
    <div className={`card-component ${cardColor}`}>
      <div className={`card-component-image ${cardColor}`}>
        <img src={img} alt={title} />
      </div>
      <div className='card-component-title'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export function CardDisplay({ categoryComponent }: IProps) {
  const filteredComponents = SKELETON.filter((item, index) => item.category == categoryComponent);

  return (
    <div className='card-display'>
      <>
        {filteredComponents.map((item, index) => {
          return <CardComponent key={index} {...item} />;
        })}
      </>
    </div>
  );
}
