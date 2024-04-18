import { FC, ReactNode } from 'react';
import { SectionLayout } from '@/shared/ui/SectionLayout';

import css from './Layout.module.scss';

type TLayoutProps = {
  personalData: ReactNode;
  usePersonalData: ReactNode;
  security: ReactNode;
  purpose: ReactNode;
  retentionPeriod: ReactNode;
  disclosure: ReactNode;
  yourRights: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <>
      <SectionLayout
        id="page-title"
        className={css.SectionTitle}
        type="transparent"
      >
        <h1 className="title">
          We process personal data and have adopted this privacy policy, which
          tells you how we collect and process data.
        </h1>
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.personalData}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.usePersonalData}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.security}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.purpose}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.retentionPeriod}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.disclosure}
      </SectionLayout>
      <SectionLayout className={css.pageSection} type="transparent">
        {props.yourRights}
      </SectionLayout>
    </>
  );
};

export { Layout };
