import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import CheckOutProductReducer from './CheckOutProductReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
      reducer: {
            checkoutProducts: CheckOutProductReducer,
      }
})

root.render(
      <Provider store={store} >
            <App />
      </Provider>
);

reportWebVitals();
