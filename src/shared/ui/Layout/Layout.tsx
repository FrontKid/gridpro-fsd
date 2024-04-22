import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUp } from '../ScrollUp';

type TLayoutProps = {
  header: ReactNode;
  footer: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <>
      {props.header}
      <main>
        <Outlet />
      </main>
      {props.footer}

      <ScrollUp />
    </>
  );
};

export { Layout };
