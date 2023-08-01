import { useEffect } from 'react';

import TranslatedText from './common/controls/translatedText/translatedText';
import { loadColors } from './common/theme/colors/colors';
import colorsJson from './common/theme/colors/colors.json';
import { loadFonts } from './common/theme/typography/typography';
import typographyJson from './common/theme/typography/typography.json';

const App = () => {
  useEffect(() => {
    loadFonts(typographyJson);
    loadColors(colorsJson);
  }, []);
  return <TranslatedText id="yes"></TranslatedText>;
};

export default App;
