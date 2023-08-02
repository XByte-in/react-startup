import { useEffect } from 'react';

import TestIcon from './__test__/testControls/testIcon';
import { loadColors, loadFonts } from './common/theme';
import defaultColors from './common/theme/colors/colors.json';
import defaultTypography from './common/theme/typography/typography.json';

import './app.scss';
import TestButton from './__test__/testControls/testButton';

const App = () => {
  useEffect(() => {
    loadFonts(defaultTypography);
    loadColors(defaultColors);
  }, []);
  return (
    <div className="app">
      {/* <TestLabel /> */}
      {/* <TestIcon /> */}
      <TestButton />
    </div>
  );
};

export default App;
