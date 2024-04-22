import { FC } from 'react';
import cn from 'classnames';

import css from './Card.module.scss';

type TCardProps = {
  className?: string;
  title: string;
  text: string;
  icon: {
    src: string;
    alt: string;
  };
};

const Card: FC<TCardProps> = ({ title, text, icon, className = '' }) => {
  return (
    <article className={cn(css.card, className)}>
      <h3 className={css.title}>{title}</h3>
      <p className={css.text}>{text}</p>
      <div className={css.iconInner}>
        <img className={css.icon} src={icon.src} alt={icon.alt} />
      </div>
    </article>
  );
};

export { Card };
