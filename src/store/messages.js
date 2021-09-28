export default {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages = [...state.messages, message];
    },
    discardOldestMessage(state) {
      state.messages = [...state.messages.slice(1)];
    }
  }
};
