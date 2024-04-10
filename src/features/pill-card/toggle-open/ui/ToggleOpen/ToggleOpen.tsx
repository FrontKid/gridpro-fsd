import { FC, ReactNode } from 'react';

import { TInitialTypeOfData, toggleOpen } from '@/entities/pill-card';
import { useAppDispatch } from '@/shared/model';

import css from './ToggleOpen.module.scss';

type TToggleOpenProps = {
  children: ReactNode;
  slug: TInitialTypeOfData;
};

const ToggleOpen: FC<TToggleOpenProps> = ({ children, slug }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleOpen(slug));
  };

  return (
    <button onClick={handleClick} type="button" className={css.button}>
      {children}
    </button>
  );
};

export { ToggleOpen };
