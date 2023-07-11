import React from 'react'
import { Routes, Route } from 'react-router-dom'
import homeModule from '../modules/home/module'
const RouteList = () => {
  const routeList = [...homeModule]
  return (
    <Routes>
      {routeList.map((r, index) => (
        <Route path={r.path} element={r.component()} key={index} />
      ))}
    </Routes>
  )
}
export default RouteList
