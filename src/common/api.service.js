import axios from "axios";
import store from "@/store";

const REST_API_URL = 'https://61c2403fde977000179b5420.mockapi.io/api'

const ApiService = {

    setHeader(){
        console.log("SET HEADER")
        axios.defaults.headers.Authorization = 'Bearer ' + store.getters.getToken
    },

    removeHeader(){
        axios.defaults.headers.Authorization = ''
    },
    
    get(resource) {
        return axios.get(REST_API_URL + resource).catch((error) => {
            throw new Error('ApiService GET error :' + error);
        })
    },

    post(resource, params) {
        return axios.post(REST_API_URL + resource, params).catch((error) => {
            throw new Error('ApiService POST error :' + error);
        })
    },

    delete(resource, params) {
        return axios.delete (REST_API_URL + resource, params).catch((error) => {
            throw new Error('ApiService DELETE error :' + error);
        })
    }
}

export default ApiService;

