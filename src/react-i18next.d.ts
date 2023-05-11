import 'react-i18next';
import 'i18next';
import common from '../public/locales/en/common.json';
import learn from '../public/locales/en/learn.json';
import temperaments from '../public/locales/en/temperaments.json';

interface I18nNamespaces {
  common: typeof common;
  temperaments: typeof temperaments;
  learn: typeof learn;

}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
