import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { ThemeProviderCustom } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderCustom>
        <App />
      </ThemeProviderCustom>
    </BrowserRouter>
  </React.StrictMode>
);
