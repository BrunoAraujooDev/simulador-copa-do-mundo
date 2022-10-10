import axios from "axios";

const http = axios.create({
    baseURL: 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams',
    'git-user': 'BrunoAraujooDev'
})

export default http;