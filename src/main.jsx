import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack';
import {BrowserRouter} from 'react-router-dom';

import {AuthContextProvider } from './context/AuthContext';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
