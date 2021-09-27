import Vue from 'vue';
import Vuex from 'vuex';
import fruitStore from './fruits';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    fruits: fruitStore
  }
});

export default store;
