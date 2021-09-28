import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { i18n } from '@/setup/i18n-setup';
import '@/filters';

Vue.config.productionTip = false;

Vue.config.optionMergeStrategies.methods = function (mixinVal, componentVal) {
  if (!mixinVal) return componentVal;
  if (!componentVal) return mixinVal;
  return componentVal;
};

Vue.directive('coloured', {
  bind: function (el) {
    console.log('Vinculado');
    el.style.color = '#F00';
  },
  inserted: function () {
    console.log('Componente insertado');
  },
  update: function () {
    console.log('Componente actualizado');
  },
  componentUpdated: function (el) {
    console.log('Componente y sus hijos totalmente actualizados');
    el.style.backgroundColor = '#88A';
    setTimeout(() => {
      el.style.backgroundColor = 'transparent';
    }, 2000);
  },
  unbind: function () {
    console.log('Desvinculado');
  }
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
