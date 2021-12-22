import router from '../router';
import store from '../store';

const axios = store.getters.getAxios

 function setupRequestInterceptor() {

    axios.interceptors.request.use((config) =>{
        if(store.getters.isAuthenticated){
            config.headers["Authorization"] = 'Bearer ' + store.getters.getToken
        } else {
            delete config.headers["Authorization"]
            router.push("/login");
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    });

        
}

 function setupResponseInterceptor() {
    axios.interceptors.response.use(
        (response) => { 
          return response;
        },
        (err) => { 
            if(err.response.status == "400"){
                console.log("Login incorrecto")
            }
          return Promise.reject(err);
        });
}


export default function setupInterceptors(){
    setupResponseInterceptor()
    setupRequestInterceptor()
}