import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import CartItems from "../views/CartItems.vue";
import ProductDetails from "../views/ProductDetails.vue";
import NotFound from "../views/NotFound.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartItems,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductDetails,
  },
  {
    path: "/:notFound",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
