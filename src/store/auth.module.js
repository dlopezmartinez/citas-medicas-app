import jwtService from "../common/jwt.service";
import {AuthService} from "@/common/api.service" 
import ApiService from "../common/api.service";


const state = {
    user: {  
      username:'',
      rol:'',
      token:'',
    }
}
const mutations = {
    setAuth(state, user){
        state.user = user
        ApiService.setHeader();
    },
    purgeAuth(state){
        state.user = {};
        ApiService.removeHeader()
    },
}
const actions = {
    
    checkAuth(context){
        console.log("Checking auth")
        if(context.getters.isAuthenticated)
            ApiService.setHeader();
    },
    login(context,credentials){
        return new Promise((resolve, reject) => {
            AuthService.post(credentials).then((response) => {
                var decoded = jwtService.transcribeToken(response.data.token);
                context.commit("setAuth", {
                username : decoded.sub,
                rol : decoded.rol,
                token : response.data.token
                })
                resolve(response.data)
            }).catch((error) => {
                reject(error.message)
            })
            }
        )},
    logout(context){
        context.commit("purgeAuth");
        getters.showState(state)
    },
}
const getters = {

    isAuthenticated(state){
        return !!state.user.token
    },
    showState(state){
        console.log(state.user)
    },

    getCredentials(state){
      return state.user
    },
    
    getToken(state){
        return state.user.token
    },
  }


export default{
    state,
    mutations,
    actions,
    getters,
}
