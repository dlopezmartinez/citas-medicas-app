<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">Banco Caminos</h1>
                <p>Tu banco de confianza.</p>
            </div>
        </div>
        <div class="container page">
            <ul id="example-1">
                <li v-for="item in source" :key="item.id">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "home",

    components: {
    },
    data() {
        return {
            source: []
        };
    },
    methods: {
        getProducts() {
            this.$store.dispatch("products").then(data => {
                console.log(data)
                this.source = data;
            });
        }
    },
    created() {
        this.getProducts()
    },
};
</script>
