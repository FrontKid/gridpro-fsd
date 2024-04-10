import { FC, ReactNode } from 'react';
import cn from 'classnames';

import css from './RadioButton.module.scss';

type TInputType = 'radio' | 'checkbox';

type TRadioButton = {
  lable?: string;
  type?: TInputType;
  name?: string;
  className?: string;
  children?: ReactNode;
  defaultValue?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const RadioButton: FC<TRadioButton> = ({
  lable = '',
  type = 'radio',
  onChange,
  className = '',
  defaultValue = 'dwadw',
  children,
  name = '',
}) => {
  return (
    <label className={cn(css.lable, className)}>
      <input
        defaultValue={defaultValue}
        name={name}
        className={css.input}
        onChange={onChange}
        type={type}
      />

      <span className={css.customRadio} />

      {lable && <span className={css.lableText}>{lable}</span>}
      {children}
    </label>
  );
};

export { RadioButton };
