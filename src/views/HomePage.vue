<template>
  <div class="container max-h-screen mx-auto">
    <img src="../assets/hero-bg.jpg" alt="hero image" />
  </div>
  <div class="container mx-auto">
    <h2 class="text-center p-3 font-bold text-3xl">Let's See Our Products</h2>

    <div class="flex flex-wrap gap-2 justify-center">
      <div v-for="product in store.state.products" :key="product.id">
        <div
          class="p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            :src="product.images[0]"
            alt="product-image"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h5>
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white"
            >
              {{ product.category }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ product.description }}
            </p>
            <div>
              <p class="mb-3 text-2xl text-gray-700 dark:text-gray-400">
                {{ product.price }} $
              </p>
              <p v-if="product.stock > 0" class="text-green-500">
                In Stock
                <span class="text-green-700 font-bold">
                  Available {{ product.stock }}</span
                >
              </p>
            </div>
            <button
              @click="store.commit('AddToCart', product)"
              type="button"
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add To Cart
            </button>
            <router-link
              :to="`/product/${product.id}`"
              type="button"
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { mapActions } from "vuex";

export default {
  setup() {
    const store = useStore();
    const product = ref({});
    onMounted(() => {
      store.commit("GetProducts");
    });
    // Added Mutations to function
    // function addToCart(product) {
    //   store.commit("AddToCart", product);
    // }
    return { store, mapActions, product };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
