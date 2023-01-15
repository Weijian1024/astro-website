import Vue from "vue";
import VueRouter from "vue-router";
import index from "./pages/index.astro";
import blog from "./pages/blog.astro";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/blog",
    component: blog,
  },
  {
    path: "/",
    component: index,
  },
  {
    path: "/",
    component: index,
  },
  {
    path: "/",
    component: index,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
