import { FC, ReactNode } from 'react';
import { Link, Path } from 'react-router-dom';
import cn from 'classnames';

import css from './Button.module.scss';

type TColor = 'white' | 'blue';

type TButtonProps = {
  children: ReactNode;
  className?: string;
  color?: TColor;
  to?: string | Partial<Path>;
};

const Button: FC<TButtonProps> = ({
  children,
  className = '',
  color = 'white',
  to,
}) => {
  return to ? (
    <Link to={to} className={cn(className, css[color], css.link, css.general)}>
      {children}
    </Link>
  ) : (
    <button
      className={cn(className, css[color], css.button, css.general)}
      type="button"
    >
      {children}
    </button>
  );
};

export { Button };
