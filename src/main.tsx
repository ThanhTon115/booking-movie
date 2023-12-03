import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './i18n/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
