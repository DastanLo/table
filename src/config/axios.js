import axios  from "axios";

const instance = axios.create({
    baseURL: 'https://api.football.kg/api/v1',
});

export default instance;