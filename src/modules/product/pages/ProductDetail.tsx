import React from 'react';
import { useLocation } from 'react-router';

const ProductDetail = () => {
  const location = useLocation();
  return <>{location.state?.id}</>;
};
export default ProductDetail;
