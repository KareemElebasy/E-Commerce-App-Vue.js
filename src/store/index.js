import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    product: {},
    cartItems: [],
  },
  getters: {},
  mutations: {
    GetProducts(state) {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          state.products = res.data.products;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
    // Add To Cart
    AddToCart(state, product) {
      const exist = state.cartItems.find((p) => p.id === product.id);
      if (exist) {
        exist.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      console.log(state.cartItems);
    },
    // Remove From Cart
    RemoveFromCart(state, product) {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      state.cartItems = removeItem;
    },
    // Icreament
    IncrementQuantity(state, product) {
      const item = state.cartItems.find((item) => item.id === product.id);
      item.quantity++;
    },

    DecrementQuantity(state, product) {
      const item = state.cartItems.find((item) => item.id === product.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
  actions: {},
  modules: {},
});
