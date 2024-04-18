import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { HomePage } from '@/pages/home-page';
import { PrivacyPage } from '@/pages/privacy-page';

import { baseLayout } from './layout/baseLayout';

const routes: RouteObject[] = [
  {
    element: baseLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'terms',
        element: <h1>Coming soon...</h1>,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: '*',
        element: <h1>Ooops...</h1>,
      },
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
