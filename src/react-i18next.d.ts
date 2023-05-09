import 'react-i18next';
import 'i18next';
import common from '../public/locales/en/common.json';
import learn from '../public/locales/en/learn.json';

interface I18nNamespaces {
  common: typeof common;
  learn: typeof learn;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
