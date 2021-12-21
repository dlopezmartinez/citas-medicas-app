import {PacienteService} from "../common/api.service";



const state = {
    pacientes : [],

}
const mutations = {

    setListPaciente(state,pacientes){
        state.pacientes = pacientes;
    },
    purgeListPaciente(state){
        state.pacientes = [];
    }
}
const actions = {

    getPacientes(context){
       return new Promise((resolve,reject) => {
        PacienteService.get().then((response) => {
            context.commit("setListPaciente",response.data)
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
       }) 
    },
    

}
const getters = {
    getPacientes(state){
        return state.pacientes;
    },

  }


export default{
    state,
    mutations,
    actions,
    getters,
}