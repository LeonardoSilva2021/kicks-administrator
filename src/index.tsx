import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { RouterApp } from './routers/router-app';
import { KicksTheme } from './views/Theme/kicks-theme';
import { ToastContainer } from 'react-toastify';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Input.css';
import '@mantine/carousel/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <MantineProvider
      theme={KicksTheme}
    >
      <RouterApp />
    </MantineProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
