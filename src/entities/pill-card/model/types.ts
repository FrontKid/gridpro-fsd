import { ReactNode } from 'react';

interface IPillData {
  title: string;
  subTitle: string;
  option: string;
  image: {
    src: string;
    alt: string;
  };
  slug: TInitialTypeOfData;
}

interface ITypeOfData {
  schedule: ReactNode;
  supplement: ReactNode;
  hidden: null;
}

type TInitialTypeOfData = keyof ITypeOfData | 'hidden';

export type { IPillData, ITypeOfData, TInitialTypeOfData };
