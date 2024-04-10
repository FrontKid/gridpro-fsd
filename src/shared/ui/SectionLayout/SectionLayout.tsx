import { FC, ReactNode } from 'react';
import cn from 'classnames';

import css from './SectionLayout.module.scss';

type TSectionType = 'colored' | 'transparent';
type TSectionColor = 'default' | 'transparent';
type TTag = 'section' | 'header' | 'footer';

type TSectionLayoutProps = {
  type: TSectionType;
  color?: TSectionColor;
  className?: string;
  tag?: TTag;
  children?: ReactNode;
};

const SectionLayout: FC<TSectionLayoutProps> = ({
  type,
  tag = 'section',
  className,
  children,
  color = 'default',
}) => {
  const coloredSectionType = {
    footer: (
      <footer className={cn(className, css[color])}>
        <div className="container">{children}</div>
      </footer>
    ),
    header: (
      <header className={cn(className, css[color])}>
        <div className="container">{children}</div>
      </header>
    ),
    section: (
      <section className={cn(className, css[color])}>
        <div className="container">{children}</div>
      </section>
    ),
  };

  const transparentSectionType = {
    footer: <footer className={cn(className, 'container')}>{children}</footer>,
    header: <header className={cn(className, 'container')}>{children}</header>,
    section: (
      <section className={cn(className, 'container')}>{children}</section>
    ),
  };

  switch (type) {
    case 'colored':
      return coloredSectionType[tag];
    case 'transparent':
      return transparentSectionType[tag];
    default:
      return null;
  }
};

export { SectionLayout };
