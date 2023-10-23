import React from 'react';
import Home from './pages/Home';
import Contact from '../../components/Contact';

const routes = [
  {
    path: '/',
    component: () => <Home />
  },
  {
    path: '/contact',
    component: () => <Contact />
  }
];

export default routes;
