import { useEffect } from 'react';

import TestButton from './__test__/testControls/testButton';
import TestCheckBox from './__test__/testControls/testCheckBox';
import TestIcon from './__test__/testControls/testIcon';
import TestLabel from './__test__/testControls/testLabel';
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
      <TestLabel />
      <TestIcon />
      <TestButton />
      <TestCheckBox />
    </div>
  );
};

export default App;
