import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { extendTheme } from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import NavbarProvider from './context/NavbarContext';

const breakpoints = {
  'sm': '450px',
  'md': '750px',
  'lg': '960px',
  'xl': '1200px',
  '2xl': '1536px',
}

extendTheme({ breakpoints })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </BrowserRouter>
  </ChakraProvider>
);