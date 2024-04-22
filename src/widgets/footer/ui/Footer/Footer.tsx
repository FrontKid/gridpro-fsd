import { Link } from 'react-router-dom';
import { SectionLayout } from '@/shared/ui/SectionLayout';
import { Logo } from '@/shared/ui/Logo';

import css from './Footer.module.scss';

const handleScrollTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <SectionLayout className={css.footer} type="colored" tag="footer">
      <div className={css.content}>
        <Logo width="254" className={css.logo} />
        <span className={css.copyright}>
          Copyright 2024 ProGridX. All rights reserved.
        </span>
        <Link className={css.privacy} onClick={handleScrollTop} to="/privacy">
          Privacy
        </Link>
      </div>
    </SectionLayout>
  );
};

export { Footer };
