<template>
  <nav-bar />
  <router-view />
  <FooTer></FooTer>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooTer from "./components/FooTer.vue";

export default {
  setup() {
    return {};
  },
  components: { NavBar, FooTer },
};
</script>

<style lang="scss" scoped></style>
