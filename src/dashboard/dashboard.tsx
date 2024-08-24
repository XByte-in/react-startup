import { useEffect } from 'react';

// import TestControls from '../__test__/testControls/_testControls';
import { Route, Routes } from 'react-router-dom';
import { loadColors, loadFonts } from '../common/theme';
import defaultColors from '../common/theme/colors/colors.json';
import defaultTypography from '../common/theme/typography/typography.json';
import Environment from '../environment';

import './dashboard.scss';
import Header from './header/header';
import SignIn from '../common/controls/signIn/signIn';

const Dashboard = () => {
  useEffect(() => {
    console.log(Environment.GOOGLE_CLIENT_ID);
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <>
      <Header />
      <SignIn />
      {/* <Routes>
        <Route path="/signIn" element={<SignIn />} />
      </Routes> */}
    </>
  );
};

export default Dashboard;
