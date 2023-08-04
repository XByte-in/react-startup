import { useEffect } from 'react';

import TestRadioButton from './__test__/testControls/testRadioButton';
import { loadColors, loadFonts } from './common/theme';
import defaultColors from './common/theme/colors/colors.json';
import defaultTypography from './common/theme/typography/typography.json';

import './app.scss';

const App = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <div className="app">
      {/* <TestLabel />
      <TestIcon />
      <TestButton />
      <TestCheckBox /> */}
      <TestRadioButton />
    </div>
  );
};

export default App;
