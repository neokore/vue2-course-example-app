import { getFruits } from '@/services/fruitService';
import {
  createFruit,
  deleteFruit,
  getFruitById
} from '../services/fruitService';

export default {
  namespaced: true,
  state: {
    fruits: [],
    selectedFruit: null
  },
  getters: {
    getFruitById(store) {
      return (id) => store.fruits.find((fruit) => fruit.id === id);
    }
  },
  mutations: {
    setFruits(state, fruitList) {
      state.fruits = [...fruitList];
    },
    setSelectedFruit(state, fruit) {
      state.selectedFruit = { ...fruit };
    }
  },
  actions: {
    async loadFruits({ commit }) {
      try {
        const fruits = await getFruits();
        commit('setFruits', fruits);
      } catch (e) {
        let message = 'Cannot get fruits';
        if (e.message.includes('404')) {
          message = 'There is no fruits';
        }
        commit(
          'messages/addMessage',
          { type: 'error', text: message },
          { root: true }
        );
      }
    },
    async loadSelectedFruit({ commit }, id) {
      try {
        const fruit = await getFruitById(id);
        commit('setSelectedFruit', fruit);
      } catch (e) {
        let message = 'Cannot get selected fruit';
        if (e.message.includes('404')) {
          message = 'There is no fruit with this ID';
        }
        commit(
          'messages/addMessage',
          { type: 'error', text: message },
          { root: true }
        );
      }
    },
    async createFruit({ dispatch }, fruit) {
      const createdFruit = await createFruit(fruit);
      dispatch('addFruit', createdFruit);
    },
    async deleteFruit({ dispatch }, id) {
      await deleteFruit(id);
      dispatch('loadFruits');
    }
  }
};
