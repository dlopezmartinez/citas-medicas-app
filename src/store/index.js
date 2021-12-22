import { createStore } from "vuex";
import auth from "./auth.module";
import service from "./service.module"
import products from "./products.module"
import createPersistedState from "vuex-persistedstate";


export default createStore({
  modules: {
    auth,
    service,
    products
  },
  plugins : [createPersistedState({
    storage : window.localStorage
  })]
});



