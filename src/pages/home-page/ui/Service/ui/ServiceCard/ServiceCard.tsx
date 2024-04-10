import { FC } from 'react';
import cn from 'classnames';
import { ICardData } from '../../types/data';

import css from './ServiceCard.module.scss';

type TServiceCardProps = {
  data: ICardData;
  className?: string;
};

const ServiceCard: FC<TServiceCardProps> = ({ data, className = '' }) => {
  return (
    <article className={cn(css.card, className)}>
      <h3 className={css.title}>{data.title}</h3>
      <p className={css.text}>{data.text}</p>
      <img className={css.image} src={data.image.src} alt={data.image.alt} />
    </article>
  );
};

export { ServiceCard };
