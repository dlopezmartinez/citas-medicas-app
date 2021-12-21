import axios from "axios";
import store from "@/store";

const REST_API_URL = 'http://localhost:8080/api'

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

export const UsuarioService = {

    getAll(){
        return ApiService.get("/usuarios");
    }

}

export const AuthService = {

    post(params){
        return ApiService.post("/authenticate",params);
    }

}

export const MedicoService = {

    get(){
        return ApiService.get("/medicos");
    },

    post(params){
        return ApiService.post("/medicos/add",params);
    }

}

export const PacienteService = {

    get(){
        return ApiService.get("/pacientes");
    },

    post(params){
        return ApiService.post("/pacientes/add",params);
    }

}