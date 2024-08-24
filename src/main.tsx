import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app/app.tsx';
import store from './common/store/store';
import Translation from './common/translations/translation.tsx';
import './main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Translation>
        <HashRouter>
          <App />
        </HashRouter>
      </Translation>
    </Provider>
  </React.StrictMode>
);
