import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import {Provider} from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import store from './slices/store.js';
import { DarkModeProvider } from './context/DarkModeContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter basename="/E-commerce">
 
  <Provider store={store}>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
 </Provider>
 </BrowserRouter>

  

  
 
);

