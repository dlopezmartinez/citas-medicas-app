import {UsuarioService} from "../common/api.service";



const state = {
    usuarios : [],
}

const mutations = {

    setListUsuario(state,usuarios){
        state.usuarios = usuarios;
    },
    purgeListUsuario(state){
        state.usuarios = [];
    }
}
const actions = {

    getUsuarios(context){
        return new Promise((resolve, reject) => { 
            UsuarioService.getAll().then((response) => {
                context.commit("setListUsuario",response.data)
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            });
        })
    },

}
const getters = {
    getUsuarios(state){
        return state.usuarios;
    },
  }


export default{
    state,
    mutations,
    actions,
    getters,
}