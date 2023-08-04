import { useEffect } from 'react';

import TestControls from './__test__/testControls/_testControls';
import { loadColors, loadFonts } from './common/theme';
import defaultColors from './common/theme/colors/colors.json';
import defaultTypography from './common/theme/typography/typography.json';

import './app.scss';

const App = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return <TestControls />;
};

export default App;
