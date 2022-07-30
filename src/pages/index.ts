import { lazy } from 'react';
import { IRoute } from 'types/route';

const Home = lazy(() => import(/* webpackChunkName: "home-Page" */ './home'));
const routes: IRoute[] = [
  {
    Component: Home,
    path: '/',
  },
];

export default routes;
