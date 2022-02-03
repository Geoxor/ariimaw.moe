import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
    meta: {
      title: "Ariimaw",
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
