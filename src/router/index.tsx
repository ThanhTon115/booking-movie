import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import homeRoutes from '../modules/home/routes';
import productRoutes from '../modules/product/routes';
import errorRoputes from '../modules/error/routes';
import { RouteType } from './types';
import { MainLayout } from '../components/layout/main-layout/MainLayout';
import NotFound from '../modules/error/NotFound';
const RouteList = () => {
  const routeList = [...homeRoutes, ...productRoutes, ...errorRoputes];
  const getPage = (r: RouteType, ind: number) => {
    const errorPage = errorRoputes.some((e) => e.path === r.path);
    const Page = r.component;
    const Layout = errorPage ? Fragment : MainLayout;
    return errorPage ? (
      <Fragment>
        <Page key={ind} />
      </Fragment>
    ) : (
      <Layout childrent={<Page />} />
    );
  };
  const childrentRender = (r: RouteType) => {
    return (
      r.children?.length &&
      r.children?.map((r: RouteType, ind) => (
        <Route path={r.path} element={getPage(r, ind)}>
          {childrentRender(r)}
        </Route>
      ))
    );
  };
  return (
    <Routes>
      {routeList.map((r, index) => (
        <Route path={r.path} element={getPage(r, index)} key={index}>
          {childrentRender(r)}
        </Route>
      ))}
      <Route element={<NotFound />} />
    </Routes>
  );
};
export default RouteList;
