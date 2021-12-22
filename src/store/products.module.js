const productsURL = "/products"



const state = {
    products : []
}
const mutations = {

  setProducts(state,products){
      state.products = products;
  },

  purgeProducts(state){
      state.products = []
  },

}
const actions = {
   
    products({commit,dispatch}){
        return new Promise((resolve,reject) => {
            dispatch("get",productsURL).then((response) => {
                commit("setProducts",response.data);
                resolve(response.data)
            }).catch((err) => {
                reject(err);
            }) 
        })
    }


}
const getters = {

    getProducts(state){
        return state.products;
    }

}

export default{
    state,
    mutations,
    actions,
    getters,
}