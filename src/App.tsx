import React from 'react';
import RouteList from './router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/main-layout/Header';
import Footer from './components/layout/main-layout/Footer';
import './css/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Header />
        <div className='pb-20'>
          <RouteList />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
