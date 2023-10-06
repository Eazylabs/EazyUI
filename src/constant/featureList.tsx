import React from 'react';
import { FeatureItem } from '../utils/interfaces/featureItem';

export const FeatureList: FeatureItem[] = [
  {
    title: 'Using Native Technology',
    Svg: require('@site/static/assets/icon-using-native-technology.svg').default,
    description: (
      <>
        Seamlessly crafted UI components harnessing the power of native technology for optimal performance and
        familiarity.
      </>
    ),
  },
  {
    title: 'Friendly to Use',
    Svg: require('@site/static/assets/icon-friendly-to-use.svg').default,
    description: (
      <>
        We've designed every element with ease of use in mind, ensuring a seamless and enjoyable experience for all
        developers. Say goodbye to complexity and hello to user-friendly innovation.
      </>
    ),
  },
  {
    title: 'Easy to Customize',
    Svg: require('@site/static/assets/icon-easy-to-customize.svg').default,
    description: (
      <>
        Our meticulously crafted components are designed to empower you with effortless customization, allowing you to
        tailor the user interface to your exact needs, quickly and efficiently.
      </>
    ),
  },
];
