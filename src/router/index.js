import { createRouter, createWebHistory } from "vue-router";
import MainPageView from "@/views/MainPageView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPageView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  // {
  //   path: "/quick-answer",
  //   name: "quickAnswer",
  //   component: HomeView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
