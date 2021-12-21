import { createStore } from "vuex";
import auth from "./auth.module";
import med from "./medico.module"
import usr from "./user.module"
import pac from "./paciente.module"
import createPersistedState from "vuex-persistedstate";


export default createStore({
  modules: {
    auth,
    med,
    usr,
    pac
  },
  plugins : [createPersistedState({
    storage : window.localStorage
  })]
});



