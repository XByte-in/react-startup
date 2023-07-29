import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';
import Translation from './common/translations/translation.tsx';
import App from './app.tsx';

import './main.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Translation>
      <HashRouter>
        <App />
      </HashRouter>
    </Translation>
  </React.StrictMode>
);
