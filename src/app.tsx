import { useEffect } from 'react';

import { loadColors, loadFonts, Typography } from './common/theme';
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
      <div className={Typography.flow_title}> Test</div>
    </div>
  );
};

export default App;
