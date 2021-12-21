<template>
  <form @submit.prevent="addMedico">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input
            v-model="medico.usuario"
            type="text"
            class="form-control"
            placeholder="Usuario"
            required
          />
        </div>
        <div class="col-6">
          <input
            v-model="medico.clave"
            type="text"
            class="form-control"
            placeholder="Contraseña"
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <input
            v-model="medico.nombre"
            type="text"
            class="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="col-6">
          <input
            v-model="medico.apellidos"
            type="text"
            class="form-control"
            placeholder="Apellidos"
            required
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-6">
          <input
            v-model="medico.numColegiado"
            type="number"
            class="form-control"
            placeholder="Nº Colegiado"
            required
          />
        </div>
        <div class="col-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="medico.disponibilidad"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">Disponibilidad</label>
          </div>
        </div>
        <div class="col-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsuarioForm",
  data() {
    return {
      medico: {
        usuario: "",
        clave: "",
        nombre: "",
        apellidos: "",
        numColegiado: "",
        disponibilidad: false,
      },
    };
  },
  methods: {
    addMedico() {
      this.$emit("addMedico", this.medico);
    },
  },
});
</script>

<style>
.form-check {
  margin-right: 30px;
  font-size: 25px;
}
</style>