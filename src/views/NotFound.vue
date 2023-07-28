<template>
  <div class="container text-center">
    <div class="flex justify-center items-center h-screen">
      <h2
        class="p-5 text-2xl font-bold tracking-tight text-red-500 dark:text-white"
      >
        Oops , Page Not Found 404 , <br />
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
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
