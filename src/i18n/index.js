import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import es from './es';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: navigator.languages?.[0],
  fallbackLocale: 'en',
  messages: {
    en: en.messages,
    es: es.messages
  }
});

export default i18n;
