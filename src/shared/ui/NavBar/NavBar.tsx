import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import cn from 'classnames';

import css from './NavBar.module.scss';

type TFlow = 'column' | 'row';

type TNavBar = {
  flow?: TFlow;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const NavBar: FC<TNavBar> = ({ flow = 'row', onClick }) => (
  <nav className={css.nav}>
    <ul className={cn(css.list, css[flow])}>
      <li className={css.item}>
        <Link onClick={onClick} className={css.link} to="/">
          Home
        </Link>
      </li>
      <li className={css.item}>
        <ScrollLink smooth duration={500} className={css.link} to="ourMission">
          About
        </ScrollLink>
      </li>
      <li className={css.item}>
        <ScrollLink smooth duration={500} className={css.link} to="services">
          Services
        </ScrollLink>
      </li>
    </ul>
  </nav>
);

export { NavBar };
