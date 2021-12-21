<template>
    <div class="container">
        <br />
        <div class="row justify-content-center" if="view">
            <List :lista="medicos" tipo="medicos"></List>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import List from "../../components/list/List.vue";


export default defineComponent({
    name: "Medico",
    data() {
        return {
            medicos: new Array()
        }
    },
    methods: {
        getMedicos() {
            this.$store.dispatch("getMedicos").then((data) => {
                this.medicos = data;
            });
        }
    },
    created() {
        this.getMedicos();
    },
    components: {
        List
    }

})
</script>

<style>
</style>