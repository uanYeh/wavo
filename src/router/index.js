import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/front/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/front/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/front/ProductView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("@/views/front/ProductDetailView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/front/NewsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/front/AboutView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/front/FaqView.vue"),
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("@/views/front/DeliveryView.vue"),
    },
    {
      path: "/return",
      name: "return",
      component: () => import("@/views/front/ReturnView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/front/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/front/CheckoutView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/front/OrderView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/front/TestView.vue"),
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: () => import("@/views/admin/LoginView.vue"),
    },
    {
      path: "/admin/dashobard",
      name: "dashobard",
      component: () => import("@/views/admin/DashboardView.vue"),
    },
  ],
});

export default router;
