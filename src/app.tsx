import { useEffect } from 'react';

import Test from './__test__/testControls/test/test';
import { loadColors, loadFonts } from './common/theme';
import defaultColors from './common/theme/colors/colors.json';
import defaultTypography from './common/theme/typography/typography.json';

import './app.scss';

const App = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return <Test />;
};

export default App;
