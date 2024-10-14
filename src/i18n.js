import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: {} },
      tr: { translation: {} },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Dynamically import translation files
const loadTranslations = async () => {
  const [enTranslations, trTranslations] = await Promise.all([
    import('./locales/en/translation.json'),
    import('./locales/tr/translation.json'),
  ]);

  i18n.addResourceBundle('en', 'translation', enTranslations.default, true, true);
  i18n.addResourceBundle('tr', 'translation', trTranslations.default, true, true);
};

loadTranslations();

export default i18n;
