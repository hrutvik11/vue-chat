import { createRouter, createWebHistory } from "vue-router";
import { isUserLoggedIn } from "../utils/helpers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
      beforeEnter: (to, from, next) => {
        if (isUserLoggedIn()) {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/loginView.vue"),
      beforeEnter: (to, from, next) => {
        if (isUserLoggedIn()) {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/user/:id",
      name: "userdetails",
      component: () => import("../views/userDetailsView.vue"),
      beforeEnter: (to, from, next) => {
        if (isUserLoggedIn()) {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../views/chatView.vue"),
      beforeEnter: (to, from, next) => {
        if (isUserLoggedIn()) {
          next();
        } else {
          next({ name: "login" });
        }
      },
    },
  ],
});

export default router;
