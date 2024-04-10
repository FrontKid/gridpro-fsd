/* eslint-disable operator-linebreak */
import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { IPillData, pillCardSelector } from '@/entities/pill-card';
import css from './PillCard.module.scss';
import { useAppSelector } from '@/shared/model';

type TPillCardProps = {
  data: IPillData;
  slotToggleOpen: ReactNode;
};

const PillCard: FC<TPillCardProps> = ({ data, slotToggleOpen }) => {
  const { togglePillModal } = useAppSelector(pillCardSelector);

  return (
    <article
      className={cn(css.card, {
        [css.isActive]:
          togglePillModal.slug !== data.slug &&
          togglePillModal.slug !== 'hidden',
      })}
    >
      <img className={css.img} src={data.image.src} alt={data.image.alt} />
      <div className={css.content}>
        <h3 className={css.title}>{data.title}</h3>
        <span className={css.subTitle}>{data.subTitle}</span>
      </div>
      {slotToggleOpen}
    </article>
  );
};

export { PillCard };
