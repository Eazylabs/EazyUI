import { ISkeleton } from '../utils/interfaces';
import { useBaseUrl } from '../utils/hooks';

export const SKELETON: Array<ISkeleton> = [
  {
    title: 'button',
    category: 'action',
    img: useBaseUrl('skeleton-button.svg'),
    color: '#146EBE',
  },
];
