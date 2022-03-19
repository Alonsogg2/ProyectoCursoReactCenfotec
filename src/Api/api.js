import axios from 'axios';

window.$apiURL =  "https://localhost:7137";
//window.$apiURL = "https://localhost:44362/api/v1" // process.env.REACT_APP_API_URL ;

const api = axios.create({
    baseURL: window.$apiURL
});


api.defaults.headers.common["Content-Type"] = 'application/json';

export default api;