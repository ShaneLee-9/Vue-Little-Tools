import axios from 'axios';
import Vue from 'vue';

// kate api
const kateHTTP = axios.create({
    baseURL: 'https://api.66mz8.com/api'
});

Vue.prototype.$kateGet = function(url, params) {
    return new Promise((resolve, reject) => {
        kateHTTP({
            method: 'get',
            url,
            params
        }).then(res => {
            if (res.data.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        }).catch(err => {
            reject(err);
        });
    });
};