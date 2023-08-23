import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { defaultThemes } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router";
import { OrderContextProvider } from './Context';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
