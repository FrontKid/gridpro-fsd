import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import css from './NavBar.module.scss';

type TFlow = 'column' | 'row';

type TNavBar = {
  flow?: TFlow;
};

const NavBar: FC<TNavBar> = ({ flow = 'row' }) => (
  <nav className={css.nav}>
    <ul className={cn(css.list, css[flow])}>
      <li className={css.item}>
        <Link className={css.link} to="/">
          Home
        </Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to="/about">
          About
        </Link>
      </li>
      <li className={css.item}>
        <Link className={css.link} to="/services">
          Services
        </Link>
      </li>
    </ul>
  </nav>
);

export { NavBar };
