
import axios from "axios";


const state = {
    req: axios.create(),
    timeout: 50000
};

const actions = {
    genericRequest(store, { url, method, body }) {
        return new Promise(resolve => {
            const REST_API_URL = 'https://61c2403fde977000179b5420.mockapi.io/api'
            console.log(url);
            console.log(method);
            console.log(body);
            const config = {
                url : REST_API_URL + url,
                method,
                body
            };
            state.req
                .request(config)
                .then(({ data }) => {
                    console.log(data)
                    return resolve(data);
                })
                .catch(({ data }) => {
                    return resolve(data);
                });
        });
    }
}

export default{
    state,
    actions
}