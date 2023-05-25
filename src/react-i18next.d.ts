import 'react-i18next';
import 'i18next';
import common from '../public/locales/en/common.json';
import learn from '../public/locales/en/learn.json';
import temperaments from '../public/locales/en/temperaments.json';
import tuner from '../public/locales/en/tuner.json';
import comparator from '../public/locales/en/comparator.json';
import settings from '../public/locales/en/settings.json';
import sheets from '../public/locales/en/sheets.json';

interface I18nNamespaces {
  common: typeof common;
  temperaments: typeof temperaments;
  sheets: typeof sheets;
  settings: typeof settings;
  comparator: typeof comparator;
  tuner: typeof tuner;
  learn: typeof learn;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
