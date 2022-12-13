import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider as ReduxProvider }  from 'react-redux';
import store from './Store/Store';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <ProSidebarProvider>
      <BrowserRouter>
        <NextUIProvider theme={theme}>
          <App />
        </NextUIProvider>
      </BrowserRouter>
    </ProSidebarProvider>
  </ReduxProvider>
);
