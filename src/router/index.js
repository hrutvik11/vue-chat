import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/loginView.vue"),
    },
    {
      path: "/user/:id",
      name: "userdetails",
      component: () => import("../views/userDetailsView.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../views/chatView.vue"),
    },
  ],
});

export default router;
