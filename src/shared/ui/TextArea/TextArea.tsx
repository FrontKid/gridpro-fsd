import { FC } from 'react';

import css from './TextArea.module.scss';

type TTextAreaProps = {
  placeholder?: string;
};

const TextArea: FC<TTextAreaProps> = ({ placeholder = '' }) => {
  return <textarea placeholder={placeholder} className={css.textarea} />;
};

export { TextArea };
