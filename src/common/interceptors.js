import router from '../router';
import store from '../store';

const axios = store.getters.getAxios

 function setupRequestInterceptor() {

    axios.interceptors.request.use((config) =>{
        if(store.getters.isAuthenticated){
            axios.defaults.headers.Authorization = 'Bearer ' + store.getters.getToken
        } else {
            delete axios.defaults.headers.common["Authorization"];
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
          console.log("Response interceptor working")  
          return response;
        },
        (error) => { 
          return Promise.reject(error);
        });
}


export default function setupInterceptors(){
    setupResponseInterceptor()
    setupRequestInterceptor()
}