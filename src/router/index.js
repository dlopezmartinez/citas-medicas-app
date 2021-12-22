import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/Login.vue"
import Home from "@/views/home/Home.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component : Home
  },

  {
    path: "/login",
    name: "login",
    component : Login
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
