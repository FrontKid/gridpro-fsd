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
    <SectionLayout className={css.service} type="transparent">
      {props.services}
    </SectionLayout>
    <SectionLayout className={css.condition} type="transparent">
      {props.condition}
    </SectionLayout>
    <SectionLayout className={css.ourMission} type="transparent">
      {props.ourMission}
    </SectionLayout>
    <SectionLayout className={css.contactUs} type="transparent">
      {props.contactUs}
    </SectionLayout>
  </>
);

export { Layout };
