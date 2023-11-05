import React from 'react';
import { ROUTE_PRODUCT_DETAIL } from './types';
import { RouteType } from '../../router/types';
import ProductDetail from './pages/ProductDetail';

const routes: RouteType[] = [
  {
    path: ROUTE_PRODUCT_DETAIL,
    component: ProductDetail
  }
];

export default routes;
