import { FC } from 'react';
import cn from 'classnames';
import { ICardData } from '../../types/data';

import css from './ServiceCard.module.scss';

type TServiceCardProps = {
  data: ICardData;
  className?: string;
  count: number;
};

const ServiceCard: FC<TServiceCardProps> = ({
  data,
  className = '',
  count,
}) => {
  return (
    <article className={cn(css.card, className)}>
      <h3 className={css.title}>{data.title}</h3>
      <div className={css.counterInner}>
        <p className={css.text}>{data.text}</p>
        <div className={css.count}>{count}</div>
      </div>
    </article>
  );
};

export { ServiceCard };
