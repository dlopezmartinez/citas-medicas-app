import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Usuarios from "@/views/usuario/Usuario.vue";
import Login from "@/views/login/Login.vue";
import Medicos from "@/views/medico/Medico.vue"
import Paciente from "@/views/paciente/Paciente.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta : {
      access : true
    }
  },
  {
    path: "/medicos",
    name: "Medicos",
    component: Medicos,
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    component: Paciente,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
