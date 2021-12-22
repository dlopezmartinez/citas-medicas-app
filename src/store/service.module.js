import ApiService from "../common/api.service"



const actions = {
    post(context,url,credentials){      
        return ApiService.post(url,credentials)      
    },

    get(context,url){
        console.log(url)
        return ApiService.get(url);
    }
}

export default{
    actions,
}
