import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("@/views/ProductDetailView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/NewsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FaqView.vue"),
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("@/views/DeliveryView.vue"),
    },
  ],
});

export default router;
