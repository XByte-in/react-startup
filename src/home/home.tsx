import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../common/controls/privateRoute/privateRoute';
import SignIn from '../common/controls/signIn/signIn';
import { loadColors, loadFonts } from '../common/theme';
import defaultColors from '../common/theme/colors/colors.json';
import defaultTypography from '../common/theme/typography/typography.json';
import Dashboard from '../dashboard/dashboard';

const Home = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Home;
