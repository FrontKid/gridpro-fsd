import { RouteObject, createHashRouter as Router } from 'react-router-dom';

import { HomePage } from '@/pages/home-page';

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
        path: 'about',
        element: <h1>Comming soon...</h1>,
      },
      {
        path: 'services',
        element: <h1>Comming soon...</h1>,
      },
      {
        path: 'terms',
        element: <h1>Comming soon...</h1>,
      },
      {
        path: 'privacy',
        element: <h1>Comming soon...</h1>,
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
