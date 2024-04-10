import { Button } from '@/shared/ui/Button';

import { NavBar } from '../../../../shared/ui/NavBar';

import css from './Header.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { SectionLayout } from '@/shared/ui/SectionLayout';

const Header = () => (
  <SectionLayout className={css.header} type="colored" tag="header">
    <div className={css.content}>
      <Logo />

      <NavBar />

      <Button className={css.button}>Contact us</Button>
    </div>
  </SectionLayout>
);

export { Header };
