import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/lang/en';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: navigator.languages?.[0],
  fallbackLocale: 'en',
  messages: {
    en: en.messages
  },
  dateTimeFormats: {
    en: en.dateTimeFormats
  },
  numberFormats: {
    en: en.dateTimeFormats
  }
});

const loadedLanguages = ['en'];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.js`
  ).then((langFile) => {
    i18n.setLocaleMessage(lang, langFile.messages);
    i18n.setDateTimeFormat(lang, langFile.dateTimeFormats);
    i18n.setNumberFormat(lang, langFile.numberFormats);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}
