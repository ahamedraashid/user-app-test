import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationCh from '@/i18n/ch/translation.json';
import translationEn from '@/i18n/en/translation.json';

export const resources = {
  en: {
    translation: translationEn,
  },
  ch: {
    translation: translationCh,
  },
} as const;

export const i18nkey = 'i18n';

i18n.use(initReactI18next).init({
  lng: localStorage.getItem(i18nkey) || 'en',
  resources,
});

export { i18n };
