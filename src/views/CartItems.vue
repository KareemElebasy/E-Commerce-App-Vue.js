<template>
  <div v-if="store.state.cartItems.length > 0" class="container">
    <h3
      class="mb-3 text-2xl text-green-500 dark:text-gray-400 text-center font-bold p-3"
    >
      Cart Items
    </h3>
    <div v-for="product in store.state.cartItems" :key="product.id">
      <div>
        <div
          class="p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
              <p v-if="product.stock > 0" class="text-green-500">In Stock</p>
            </div>
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Quantity : {{ product.quantity }}
            </h4>
            <div>
              <button
                @click="store.commit('IncrementQuantity', product)"
                class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Increase
              </button>
              <button
                @click="store.commit('DecrementQuantity', product)"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Decrease
              </button>
              <button
                @click="store.commit('RemoveFromCart', product)"
                class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Remove
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
  </div>
  <div v-if="store.state.cartItems.length === 0" class="container">
    <div class="flex justify-center items-center h-screen">
      <h2
        class="p-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Your Cart is Empty ,
        <RouterLink
          to="/"
          class="mb-3 text-2xl text-green-500 dark:text-gray-400"
          >Let's Go To Our Store
        </RouterLink>
      </h2>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return { store };
  },
};
</script>

<style lang="scss" scoped></style>
