import React from 'react';
import { Routes, Route } from 'react-router-dom';
import homeRoutes from '../modules/home/routes';
const RouteList = () => {
  const routeList = [...homeRoutes];
  return (
    <Routes>
      {routeList.map((r, index) => (
        <Route path={r.path} element={r.component()} key={index} />
      ))}
    </Routes>
  );
};
export default RouteList;
