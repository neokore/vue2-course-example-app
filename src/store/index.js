import Vue from 'vue';
import Vuex from 'vuex';
import fruitStore from './fruits';
import messagesStore from './messages';
import meatStore from '@/modules/moduleA/store/meat';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    fruits: fruitStore,
    messages: messagesStore,
    meat: meatStore
  }
});

export default store;
