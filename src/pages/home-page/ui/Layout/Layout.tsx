import { FC, ReactNode } from 'react';
import { SectionLayout } from '@/shared/ui/SectionLayout';

import css from './Layout.module.scss';

type TLayoutProps = {
  hero: ReactNode;
  services: ReactNode;
  condition: ReactNode;
  ourMission: ReactNode;
  contactUs: ReactNode;
};

const Layout: FC<TLayoutProps> = props => (
  <>
    <SectionLayout className={css.hero} type="colored">
      {props.hero}
    </SectionLayout>
    <SectionLayout
      id="services"
      className={css.service}
      type="colored"
      color="blue"
    >
      {props.services}
    </SectionLayout>
    <SectionLayout className={css.condition} type="transparent">
      {props.condition}
    </SectionLayout>
    <SectionLayout
      id="ourMission"
      className={css.ourMission}
      type="colored"
      color="blue"
    >
      {props.ourMission}
    </SectionLayout>
    <SectionLayout className={css.contactUs} type="transparent">
      {props.contactUs}
    </SectionLayout>
  </>
);

export { Layout };
