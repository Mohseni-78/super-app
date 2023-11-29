import * as types from "@/store/types";
const state = {
  products: [],
  cart: [],
  quantity: 10,
};
const getters = {
  [types.product.getters.GET_PRODUCTS]: (state) => {
    return state.products;
  },
  [types.product.getters.GET_QUANTITY]: (state) => {
    return state.quantity;
  },
};
const mutations = {
  [types.product.mutations.MUTATE_PRODUCT_DATA]: (state, payload) => {
    state.products = payload;
  },
};
const actions = {
  [types.product.actions.SET_PRODUCT_DATA]: ({ commit }, payload) => {
    commit(types.product.mutations.MUTATE_PRODUCT_DATA, payload);
  },
};
export default { state, getters, mutations, actions };
