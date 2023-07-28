<template>
  <div class="container flex justify-center items-center h-screen py-3 mr-2">
    <div
      class="p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        :src="product.thumbnail"
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
        </div>
        <button
          @click="store.commit('AddToCart', product)"
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const product = ref({});
    onBeforeMount(() => {
      axios
        .get(`https://dummyjson.com/products/${route.params.id}`)
        .then((res) => {
          product.value = res.data;
          console.log(res.data);
        });
    });
    return { route, product, store };
  },
};
</script>

<style lang="scss" scoped></style>
