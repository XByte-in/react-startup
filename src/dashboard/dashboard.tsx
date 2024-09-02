import { Route, Routes } from 'react-router-dom';

import TestControls from '../__test__/testControls/_testControls';
import PrivateRoute from '../common/controls/privateRoute/privateRoute';
import Admins from './admins/admins';
import Header from './header/header';

import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <TestControls />
        <Routes>
          <Route
            path="/admins"
            element={
              <PrivateRoute>
                <Admins />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
