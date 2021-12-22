const authURL = "/login"


const state = {
    token: '',
    username:'',
    isAuthenticated : false
}
const mutations = {

    setUser(state, user){
        state.token = user.token;
        state.username = user.name;
        state.isAuthenticated = true;
    },

    purgeUser(state){
        state.token = '';
        state.username = '';
        state.isAuthenticated = false;
    }

}
const actions = {
   login({commit,dispatch},credentials){
       return new Promise((resolve,reject) => {
        dispatch(
            "genericRequest",
            {
                url: authURL,
                method: "POST",
                payload: credentials
            }
        )
        .then((response) => {
             commit("setUser", {
                 token : response.token,
                 name : response.username,
             });
             resolve(response)
        }).catch((error) => {
            reject(error.message)
        })
       })

   },

   logOut({commit}){
       commit("purgeUser");
   }

}
const getters = {

    isAuthenticated(state){
        return state.isAuthenticated;
    },

    currentUser(state){
        return state.username;
    },

    getToken(state){
        return state.token
    }

}

export default{
    state,
    mutations,
    actions,
    getters,
}
