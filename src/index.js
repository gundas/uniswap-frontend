import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import './i18n';
import App from './pages/App';
import store from './store';

import './index.scss';

window.addEventListener('load', function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root')
  );
});

