import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/teams',
})

export default http;