<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Banco Caminos</router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact :to="{ name: 'login' }">
            <i class="ion-compose"></i>Sign in
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="navbar-brand nav-item" v-if="currentUser">Hola de nuevo, {{ currentUser }} |
        <b-button id="btnLogout" variant="link" v-if="currentUser" v-on:click="logout">Logout</b-button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logOut",).then(() => {
                console.log("Logout correcto")
                this.$router.push("/login");
            }).catch((error) => {
                console.log(error)
            })
      
    }
  }
};
</script>

<style>

#btnLogout{
  color: red;
}
</style>