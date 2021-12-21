<template>
  <div class="container">
    <br />
    <button class="btn btn-primary" @click="showCredentials">Show Credentials</button>
    <br />
    <div class="row justify-content-center" id="view">
      <div class="col-md-12">
        <List :lista="usuarios" tipo="usuarios"></List>
        <button class="btn btn-primary" v-on:click="getUsuarios">Refrescar</button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h1>Registrar nuevo usuario</h1>
        <hr />
        <UsuarioForm @addMedico="postMedico($event)" />
      </div>
    </div>
  </div>
</template>

<script>

import UsuarioForm from "@/views/usuario/UsuarioForm.vue"
import List from "../../components/list/List.vue";
import { MedicoService } from "@/common/api.service"
import { defineComponent } from "vue";


export default defineComponent({
  name: "Usuarios",
  data() {
    return {
      usuarios: new Array(),
    };
  },
  methods: {
    getUsuarios() {
      this.$store.dispatch("getUsuarios").then((data) => {
        this.usuarios = data;
      })
    },
    postMedico(medico) {
      MedicoService.post(medico)
        .then((response) => {
          if (response.status == "200") {
            this.getUsuarios();
          }
        })
        .catch(() => {
          alert("Credenciales invalidas, pruebe con otro nombre de usuario");
        });
    },

    showCredentials() {
      console.log(this.$store.getters.getCredentials)
    }

  },
  created() {
    this.getUsuarios();
  },

  components: {
    UsuarioForm,
    List,
  },
});
</script>

<style>
#view {
  padding-top: 50px;
}
</style>
