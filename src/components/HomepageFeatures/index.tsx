import { FeatureList } from '@site/src/constant/featureList';
import { FeatureItem } from '@site/src/utils/interfaces/featureItem';
import React from 'react';
import './style.css';

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className='card'>
      <Svg className='' role='img' />
      <div className=''>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='features'>
      <h3>Why using Eazy?</h3>
      <h2>A delightful experience for you and your users</h2>
      <div className='card-display'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
