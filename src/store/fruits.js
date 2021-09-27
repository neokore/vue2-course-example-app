import { getFruits } from '@/services/fruitService';
import {
  createFruit,
  deleteFruit,
  getFruitById
} from '../services/fruitService';

export default {
  namespaced: true,
  store: {
    fruits: [],
    selectedFruit: null
  },
  getters: {
    getFruitById(store) {
      return (id) => store.fruits.find((fruit) => fruit.id === id);
    }
  },
  mutations: {
    setFruits(store, fruitsList) {
      store.fruits = [...fruitsList];
    },
    setSelectedFruit(store, fruit) {
      store.selectedFruit = { ...fruit };
    }
  },
  actions: {
    async loadFruits({ commit }) {
      try {
        const fruits = await getFruits();
        commit('setFruits', fruits);
      } catch (e) {
        let message = 'Cannot get fruits';
        if (e.contains('404')) {
          message = 'There is no fruits';
        }
        throw new Error(message);
      }
    },
    async loadSelectedFruit({ commit }, id) {
      try {
        const fruit = await getFruitById(id);
        commit('setSelectedFruit', fruit);
      } catch (e) {
        let message = 'Cannot get selected fruit';
        if (e.contains('404')) {
          message = 'There is no fruit with this ID';
        }
        throw new Error(message);
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
