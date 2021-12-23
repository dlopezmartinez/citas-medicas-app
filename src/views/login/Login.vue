<template>
  <div id="homeId" class="home-page">
    <div class="banner">
      <h1>Introduzca sus datos de usuario</h1>
    </div>
    <div class="container" id="logincontainer">
      <form class="form-signin" @submit.prevent="signIn">
        <label for="inputUser" class="sr-only">Usuario</label>
        <input
          type="text"
          id="inputUser"
          class="form-control"
          placeholder="Usuario"
          required
          autofocus
          v-model="datos.usuario"
        />
        <label for="inputPassword" class="sr-only">Clave</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Clave"
          required
          v-model="datos.clave"
        />
        <br />
        <div class="alert alert-danger" role="alert" v-if="error">
          {{ error }}
        </div>
        <br />
        <button
          id="btnLogin"
          class="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      datos: {
        usuario: "",
        clave: "",
      },
      error: "",
    };
  },
  methods: {
    signIn() {
      this.$store
        .dispatch("login", {
          username: this.datos.usuario,
          password: this.datos.clave,
        })
        .then(() => {
          console.log("Login correcto");
          this.error = null;
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.error = "Crecendiales incorrectas";
        });
    },
  },
});
</script>

<style>
.h1 {
  font-size: 40px;
}

.sr-only {
  font-size: 30px;
}

#logincontainer {
  padding-top: 30px;
  vertical-align: middle;
  max-width: 500px;
}

#btnLogin {
  background: rgb(217, 171, 110);
  border-color: rgb(217, 171, 110);
}
</style>
