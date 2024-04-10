import { FC } from 'react';

import { ITypeOfData, TInitialTypeOfData } from '@/entities/pill-card';

import { PillCardShedule } from '../PillCardShedule';
import { Supplement } from '../Supplement';

type TPillCardLayoutProps = {
  slug: TInitialTypeOfData;
};

const typeOfData: ITypeOfData = {
  schedule: <PillCardShedule />,
  supplement: <Supplement />,
  hidden: null,
};

const PillCardLayout: FC<TPillCardLayoutProps> = ({ slug }) => {
  return typeOfData[slug];
};

export { PillCardLayout };
