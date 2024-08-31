import { useEffect } from 'react';

import TestControls from '../__test__/testControls/_testControls';
import { Route, Routes } from 'react-router-dom';
import { loadColors, loadFonts } from '../common/theme';
import defaultColors from '../common/theme/colors/colors.json';
import defaultTypography from '../common/theme/typography/typography.json';
import Environment from '../environment';

import './dashboard.scss';
import Header from './header/header';
import SignIn from '../common/controls/signIn/signIn';
import PrivateRoute from '../common/controls/privateRoute/privateRoute';
import Admins from './admins/admins';

const Dashboard = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <TestControls />
        <Admins />
        {/* <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Admins />
              </PrivateRoute>
            }
          />
        </Routes> */}
      </div>
    </div>
  );
};

export default Dashboard;
