import axios from 'axios';

let base = 'api';

export default {
    getHelloMessage() {
        // this is the axios call
        return axios.get(base).then( (response) => {
            return response.data;
        })
    }
}