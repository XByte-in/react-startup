import { Route, Routes } from 'react-router-dom';

import TestControls from '../__test__/testControls/_testControls';
import PrivateRoute from '../common/controls/privateRoute/privateRoute';
import Header from './header/header';
import { NavigationJson } from './routePermissionMap';

import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <TestControls />
        <Routes>
          {NavigationJson.map(navItem => {
            const Component = navItem.component;
            return (
              <Route
                key={navItem.route}
                path={`/${navItem.route}`}
                element={
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
