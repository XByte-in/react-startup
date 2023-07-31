import TranslatedText from './common/controls/translatedText/translatedText';
import { loadFonts } from './common/theme/typography/typography';
import typographyJson from './common/theme/typography/typography.json';

const App = () => {
  loadFonts(typographyJson);
  return <TranslatedText id="yes"></TranslatedText>;
};

export default App;
