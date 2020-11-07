import axios from 'axios';
import url from './url.json';

const API =  axios.create({
    baseURL: url.url,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

API.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
);

export default API;