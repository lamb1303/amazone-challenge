import axios from 'axios';

const instance = axios.create({
    baseURL: "" //API (Cloud Function) URL
})

export default instance;