import {MedicoService} from "../common/api.service";



const state = {
    medicos : [],
    medico : {
        nombre : '' ,
        apellidos : '' ,
        numColegiado : '' ,
        disponibilidad : Boolean,
    }
}
const mutations = {
    setMedico(state,medico){
        state.medico = medico
    },
    purgeMedico(state){
        state.medico = {}
    },
    setListMedico(state,medicos){
        state.medicos = medicos;
    },
    purgeListMedico(state){
        state.medicos = [];
    }
}
const actions = {

    getMedicos(context){
       return new Promise((resolve,reject) => {
        MedicoService.get().then((response) => {
            context.commit("setListMedico",response.data)
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
       }) 
    },
    
    setMedico(context,medico){
        console.log("Set medico called")
        context.commit("setMedico",medico);
    }


}
const getters = {
    getMedicos(state){
        return state.medicos;
    },

    getMedico(state){
        return state.medico;
    }
  }


export default{
    state,
    mutations,
    actions,
    getters,
}