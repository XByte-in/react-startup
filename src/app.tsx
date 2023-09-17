import { useEffect } from 'react';

import SignIn from './common/controls/signIn/signIn';
import { loadColors, loadFonts } from './common/theme';
import defaultColors from './common/theme/colors/colors.json';
import defaultTypography from './common/theme/typography/typography.json';
import Environment from './environment';

import './app.scss';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    console.log(Environment.GOOGLE_CLIENT_ID);
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default App;
