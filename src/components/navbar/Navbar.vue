<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/usuarios">Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/medicos">Medicos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pacientes">Pacientes</router-link>
          </li>
        </ul>
      </div>
      <a href="#" @click="logOut">Cerrar sesión</a>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login")
      })

    },
  },
});
</script>

<style>
.navbar-light {
  background-color: #3e8e7e;
  color: #faedc6;
}

.nav-item {
  padding: 10px;
}

#navbarNav {
  margin-left: 190px;
  justify-content: center;
}

#navbarNav a {
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}

a {
  padding-right: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}

#navbarNav a.router-link-exact-active {
  color: #fabb51;
}
</style>
