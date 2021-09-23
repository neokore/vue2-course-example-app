export const GETTERS = {
  favListSize: 'FAV_LIST_SIZE'
};

export const MUTATION_ADD_COUNT = 'addCount';

export default {
  namespaced: true,
  state: {
    count: 0,
    favList: [1, 2, 3],
    myObj: {}
  },
  getters: {
    [GETTERS.favListSize]: (_, getters) => getters.favList.length,
    favList: (state) => state.favList,
    favByIndex: (state, getters, rootState, rootGetters) => rootGetters.cosas
  },
  mutations: {
    [MUTATION_ADD_COUNT](state) {
      console.log('Soy A');
      state.count = state.count + 1;
    },
    addCountBy(state, value) {
      state.count = state.count + value;
    }
  },
  actions: {
    loadFavList({ commit, dispatch }) {
      dispatch('moduleb/actionMan', null, { root: true });
      commit('mutationMan', null, { root: true });
      return new Promise((resolve) => {
        fetch('http://myfavapi.com/api/favs').then((response) =>
          response.json()
        );
        commit('anotherMutation');
        dispatch('otroAction');
        resolve();
      });
    },
    otroAction: ({ commit, dispatch }, payload) => {
      console.log(payload);
      dispatch('loadFavList').then(async () => {
        const result = fetch();
        commit('anotherMutation2', result);
      });
    }
  }
};
