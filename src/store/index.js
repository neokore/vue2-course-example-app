import Vue from 'vue';
import Vuex from 'vuex';

import favStore from './fav';

Vue.use(Vuex);

/*
 * WARNING!
 * Esta store está creada para fines educativos,
 * el autor no se responsabiliza de su uso indebido 😜
 */

const store = new Vuex.Store({
  state: {
    susCosas: 'muchas'
  },
  getters: {
    cosas: (state) => state.susCosas
  },
  actions: {
    actionMan() {}
  },
  modules: {
    fav: favStore
  }
});

export default store;
