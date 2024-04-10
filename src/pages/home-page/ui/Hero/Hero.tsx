import { FC } from 'react';
import classNames from 'classnames';

import css from './Hero.module.scss';

type THeroProps = object;

const Hero: FC<THeroProps> = () => {
  return (
    <div className={css.content}>
      <span className={css.decorTitle}>Welcome to ProGridX,</span>
      <h1 className={classNames(css.title, 'title')}>
        Your trusted partner for property inspections and repairs
      </h1>
      <h4 className={css.subtitle}>
        Our purpose is to ensure the safety and integrity of your property while
        making the repair process as smooth and efficient as possible.
      </h4>

      <div className={css.play}>
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="88"
            height="88"
            rx="44"
            fill="#061F42"
            fillOpacity="0.8"
          />
          <path
            // eslint-disable-next-line max-len
            d="M63.5625 44.4696C63.5636 44.9258 63.4466 45.3746 63.2229 45.7723C62.9992 46.1699 62.6764 46.5029 62.2859 46.7388L38.085 61.5436C37.677 61.7935 37.2097 61.9299 36.7313 61.9387C36.2529 61.9476 35.7809 61.8286 35.3639 61.594C34.9509 61.3631 34.6068 61.0263 34.3671 60.6183C34.1274 60.2103 34.0007 59.7459 34 59.2727V29.6665C34.0007 29.1933 34.1274 28.7288 34.3671 28.3209C34.6068 27.9129 34.9509 27.5761 35.3639 27.3452C35.7809 27.1106 36.2529 26.9916 36.7313 27.0005C37.2097 27.0093 37.677 27.1457 38.085 27.3956L62.2859 42.2003C62.6764 42.4363 62.9992 42.7693 63.2229 43.1669C63.4466 43.5646 63.5636 44.0133 63.5625 44.4696Z"
            fill="#F8FBFB"
          />
        </svg>
      </div>
    </div>
  );
};

export { Hero };
