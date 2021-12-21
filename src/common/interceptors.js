import axios from 'axios';
import router from '../router';
import store from '../store';

export default function setupInterceptors() {
    axios.interceptors.response.use((response) => {return response},   (error) => {
        switch(error.status){
            case 400 :
                console.error(error.response.status, error.message);
                return error;
            case 401:
                console.error(error.response.status, error.message);
                store.dispatch("purgeAuth");
                router.push("login");
                break;

        }
    })
}