import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';
import './style.css';

type IElemWrap = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <ElementWrapper title='Alert' Svg={require('@site/static/assets/hero-alert.svg').default} />
      <ElementWrapper title='Accordion' Svg={require('@site/static/assets/hero-accordion.svg').default} />
      <ElementWrapper title='Image' Svg={require('@site/static/assets/hero-image.svg').default} />
      <ElementWrapper title='Avatar' Svg={require('@site/static/assets/hero-avatar.svg').default} />
      <ElementWrapper title='Modal' Svg={require('@site/static/assets/hero-modal.svg').default} />
      <ElementWrapper title='Tweet' Svg={require('@site/static/assets/hero-tweet.svg').default} />
      <div className='container'>
        <h1 className='hero-title'>Boost Your Creativity with Our UI Collection Without Third Party Required</h1>
        <Link className='button' to='/docs/intro'>
          Get Started 🚀
        </Link>
      </div>
    </header>
  );
}

function ElementWrapper({ title, Svg }: IElemWrap) {
  return (
    <div className='element-wrapper' title={title}>
      <div className='element-wrapper-dot'></div>
      <div className='element-wrapper-dot'></div>
      <div className='element-wrapper-dot'></div>
      <div className='element-wrapper-dot'></div>
      <Svg className='' role='img' />
      <h3 className='element-wrapper-title'>{title}</h3>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
