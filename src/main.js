import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setupInterceptors from "./common/interceptors";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

//Así es como se declararía en Vue 2, en Vue 3 es OBLIGATORIO declarar nuestra app como más abajo, usando el método createApp

// new Vue({
//     router,
//     store,
//     render: h => h(App),
// }).mount("#app");

//Ensure we checked auth before each page load.
router.beforeResolve((to, from, next) =>{         
    if(to.name=="Login"){
        next()
    } else {
        if(!store.getters.isAuthenticated){
            next("/login")
        } else{
            next()
        }
    }
});

//If we have user login data in our store, set the token to the header
store.dispatch("checkAuth");

//setup interceptors
setupInterceptors();

const app = createApp(App)
app.use(router);
app.use(store);
app.mount("#app");

