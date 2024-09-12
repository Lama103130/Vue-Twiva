import { createStore } from 'vuex';

export default createStore({
  state: {
    cartCount: 0
  },
  mutations: {
    incrementCart(state, quantity) {
      state.cartCount += quantity;
    }
  },
  actions: {
    addToCart({ commit }, quantity) {
      commit('incrementCart', quantity);
    }
  },
  getters: {
    cartCount: (state) => state.cartCount
  }
});
