import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));



//If the service worker API is supported in the browser,
//register it against the site using the ServiceWorkerContainer.register() method
if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./serviceWorker.js')
    .then(() => console.log("Service Worker Registered"));
}
