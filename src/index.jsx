import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store/store';
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ScrollToTop />
  </React.StrictMode>,
  document.getElementById('root')
);
