import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

console.log(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`);

const RELEASE = '1.0.1';
Sentry.init({
  dsn: 'https://b5212eb9b1b241d180fc96fb90b8b7ff@o1008738.ingest.sentry.io/5972750',
  release: RELEASE,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
