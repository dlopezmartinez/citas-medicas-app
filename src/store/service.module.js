
import axios from "axios";


const state = {
    req: axios.create(),
    timeout: 50000
};


const actions = {
    genericRequest(store, { url, method, payload }) {
        return new Promise((resolve, reject) => {
            const REST_API_URL = 'http://localhost:3000/api'
            console.log(url);
            console.log(method);
            console.log(payload);
            const config = {
                url : REST_API_URL + url,
                method,
                data: payload
            };
            state.req
                .request(config)
                .then(( {data} ) => {
                    console.log(data)
                     resolve(data);
                })
                .catch((err) => {
                    reject(err)
                })
        });
    }
}

const getters = {
    getAxios(state){
        return state.req
    }
}

export default{
    state,
    actions,
    getters
}
