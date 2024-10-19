import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './common/store/store';
import Translation from './common/translations/translation.tsx';
import Home from './home/home.tsx';

import './main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Translation>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Translation>
    </Provider>
  </React.StrictMode>
);
