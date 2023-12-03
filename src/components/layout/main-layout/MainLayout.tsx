import React from 'react';
import RouteList from '../../../router';
import Footer from './Footer';
import Header from './Header';

export const MainLayout = ({ childrent }) => {
  return (
    <div className='relative z-0 bg-primary'>
      <Header />
      <div className='pb-20'>{childrent}</div>
      <Footer />
    </div>
  );
};
