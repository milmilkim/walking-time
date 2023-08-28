import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import Helmet from './components/common/Helmet.tsx';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './config/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet />
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
