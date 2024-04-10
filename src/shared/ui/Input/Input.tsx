import { FC } from 'react';
import cn from 'classnames';

import css from './Input.module.scss';

type TInputType = 'text' | 'email' | 'password';

type TInputProps = {
  lable?: string;
  type?: TInputType;
  value: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input: FC<TInputProps> = ({
  lable = '',
  type = 'text',
  value,
  className = '',
  onChange,
  placeholder = 'e.g. Taylor Smith',
}) => {
  return (
    <label className={cn(css.lable, className)}>
      {lable && <span className={css.lableText}>{lable}</span>}
      <input
        className={css.input}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </label>
  );
};

export { Input };
