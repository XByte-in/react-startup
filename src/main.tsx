import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './common/store/store';
import Translation from './common/translations/translation.tsx';
import Dashboard from './dashboard/dashboard.tsx';

import './main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Translation>
        <HashRouter>
          <Dashboard />
        </HashRouter>
      </Translation>
    </Provider>
  </React.StrictMode>
);
