<template>
  <div id="app">
    <Navbar></Navbar>
    <br />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #faedc6;
  background-color: #7cd1b8;
}

#app a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
