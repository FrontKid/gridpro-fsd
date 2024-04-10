/* eslint-disable import/no-absolute-path */
import { IPillData } from './types';

import suplementImage from '/images/pill-card-suplement.png';
import shedule from '/images/pill-card-shedule.png';

const pillCardData: IPillData[] = [
  {
    title: 'PROPERTY OWNER',
    subTitle: 'Residential, Commercial Property',
    option: 'Schedule your inspection',
    image: {
      src: shedule,
      alt: 'shedule image',
    },
    slug: 'schedule',
  },
  {
    title: 'CONTRACTOR',
    subTitle: '',
    option: 'Supplement Assistance',
    image: {
      src: suplementImage,
      alt: 'suplement image',
    },
    slug: 'supplement',
  },
];

export { pillCardData };
