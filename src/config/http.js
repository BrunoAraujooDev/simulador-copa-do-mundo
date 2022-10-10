import axios from "axios";

const http = axios.create({
    baseURL: 'https://estagio.geopostenergy.com/WorldCup',
    headers: {
        'git-user': 'BrunoAraujooDev'
    }
})

export default http;