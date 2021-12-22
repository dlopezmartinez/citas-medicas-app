<template>
  <div id="homeId" class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Listado de products</h1>
        <p>Seleccione un producto para continuar</p>
      </div>
    </div>
    <div class="container page">
      <ul id="list-products" class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action list-group-item-primary"
          v-for="item in source"
          :key="item.id"
        >
          <strong>{{ item.name }}</strong> {{ item.balance }}€
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  components: {},
  data() {
    return {
      source: [],
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("products").then((data) => {
        console.log(data);
        this.source = data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style>
#list-products {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
