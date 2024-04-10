import { FC, ReactNode } from 'react';
import cn from 'classnames';
import css from './FormLayout.module.scss';

type TFormLayoutProps = {
  children: ReactNode;
  column?: boolean;
  className?: string;
};

const FormLayout: FC<TFormLayoutProps> = ({
  children,
  className = '',
  column = false,
}) => {
  return (
    <form
      className={cn(css.form, className, {
        [css.column]: column,
      })}
    >
      {children}
    </form>
  );
};

export { FormLayout };
