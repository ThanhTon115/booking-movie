import React, { Component, LazyExoticComponent } from 'react';

export const extractSubRoute = (routeName: string, prefix: string): string => routeName.replace(`/${prefix}/`, '');

export type RouteType = {
  path: string;
  component: () => React.JSX.Element;
  layout?: () => React.JSX.Element;
  children?: RouteType[];
};
