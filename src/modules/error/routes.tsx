import React, { Fragment } from 'react';
import { RouteType } from '../../router/types';
import NotFound from './NotFound';
import { ROUTE_NOT_FOUND } from './types';

const routes: RouteType[] = [
  {
    path: ROUTE_NOT_FOUND,
    component: NotFound,

  },
  {
    path: '/:catchAll(.*)*',
    component: NotFound,
  }
];

export default routes;
