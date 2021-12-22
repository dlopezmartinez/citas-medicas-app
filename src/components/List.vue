<template>
    <h1>Lista de {{ tipo }}</h1>
    <hr />
    <table class="table">
        <thead>
            <tr>
                <th
                    v-for="(columnName,index) in columns"
                    :key="index"
                >{{ columnName.toUpperCase() }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(content,index) in lista" :key="index">
                <td v-for="(arrayData,index) in content" :key="index">{{ arrayData }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "List",
    props: {
        tipo: {
            tipo: String,
            required: true
        },
        lista: {
            array: Array,
            required: true
        }
    },
    data() {
        return {
            columns: Object.keys(this.lista[0])
        };
    },
    methods: {

    },
    created() {

    },
});

</script>




<style>
</style>