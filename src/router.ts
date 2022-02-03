import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
    meta: {
      title: "Optik",
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
