import { Link } from 'react-router-dom';
import { SectionLayout } from '@/shared/ui/SectionLayout';
import { Logo } from '@/shared/ui/Logo';

import css from './Footer.module.scss';
import { NavBar } from '@/shared/ui/NavBar';

const handleScrollTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <SectionLayout className={css.footer} type="colored" tag="footer">
      <div className={css.content}>
        <div>
          <Logo width="254" className={css.logo} />
          <span className={css.copyright}>
            Copyright 2024 ProGridX. All rights reserved.
          </span>
        </div>

        <div>
          <h4 className={css.listTitle}>Site map</h4>
          <NavBar onClick={handleScrollTop} flow="column" />
        </div>

        <div>
          <h4 className={css.listTitle}>Contact</h4>

          <ul className={css.list}>
            <li>
              <a href="mailto:contact@progridx.com">contact@progridx.com</a>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link onClick={handleScrollTop} to="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export { Footer };
