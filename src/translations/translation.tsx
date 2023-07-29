import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import translation_english from './i18n/en-US.json';
import translation_hindi from './i18n/hi.json';

const messages: { [key: string]: { [key: string]: string } } = {
  'en-US': translation_english,
  hi: translation_hindi,
};

interface ITranslationProps {
  children: ReactNode;
}

const Translation = (props: ITranslationProps) => {
  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    let lang = language;
    if (lang == null || lang === '') {
      lang = navigator.languages?.[0] || navigator.language;
    }
    if (lang == null || lang === '') lang = 'en-US';
    if (!messages[lang]) lang = 'en-US';
    setLanguage(lang);
  }, [language]);

  const message =
    language === 'en-US'
      ? translation_english
      : { ...translation_english, ...messages[language] };
  return (
    <IntlProvider locale={language} messages={message}>
      {props.children}
    </IntlProvider>
  );
};

export default Translation;
