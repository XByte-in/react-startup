import { useEffect } from 'react';

// import TestControls from '../__test__/testControls/_testControls';
import { loadColors, loadFonts } from '../common/theme';
import defaultColors from '../common/theme/colors/colors.json';
import defaultTypography from '../common/theme/typography/typography.json';
import Environment from '../environment';

import './dashboard.scss';
import Header from './header/header';

const Dashboard = () => {
  useEffect(() => {
    console.log(Environment.GOOGLE_CLIENT_ID);
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return <Header />;
};

export default Dashboard;
