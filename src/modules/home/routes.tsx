import React from 'react';
import Home from './pages/Home';
import Contact from '../../components/Contact';
import { RouteType } from '../../router/types';

const routes: RouteType[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  }
];

export default routes;
