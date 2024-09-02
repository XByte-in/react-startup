import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

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
      {/* <Route path="/signIn" element={<SignIn />} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  );
};

export default Home;
