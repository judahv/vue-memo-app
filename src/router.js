import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import New from "./views/New";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{ path: "/", component: Home }, { path: "/new", component: New }]
});
export default router;
