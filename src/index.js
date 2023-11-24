import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PreventScroll from './components/PreventScroll';
import { Provider } from 'react-redux';
import store from "./store"
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
          <BrowserRouter>
            <HelmetProvider>
              <PreventScroll />
              <App />
            </HelmetProvider>
          </BrowserRouter>
        </Provider>  
);


reportWebVitals();
