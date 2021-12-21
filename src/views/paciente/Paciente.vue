<template>
    <div class="container">
        <br />
        <div class="row justify-content-center" if="view">
            <List :lista="pacientes" tipo="pacientes"></List>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import List from "../../components/list/List.vue";


export default defineComponent({
    name: "Paciente",
    data() {
        return {
            pacientes: new Array()
        }
    },
    methods: {
        getPacientes() {
            this.$store.dispatch("getPacientes").then((data) => {
                this.pacientes = data;
            });
        }
    },
    created() {
        this.getPacientes();
    },
    components: {
        List
    }

})
</script>

<style>
</style>