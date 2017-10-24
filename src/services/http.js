import { getUserToken } from './storage';

var axios = require('axios');

export const post = function(endpoint, body, params){
  return new Promise((resolve, reject) => {
    axios.post(endpoint, body).then(response => {
      if (!response.data){
        reject();
      } else {
        resolve(response.data);
      }
    }).catch(error => {
        reject(error.response.data);
    });
  });
}

export const get = function(endpoint, body, params){
  return new Promise((resolve, reject) => {
    axios.get(endpoint, {
    headers: { Authorization: "JWT " + getUserToken() }
}).then(response => {
      if (!response.data){
        reject();
      } else {
        resolve(response.data);
      }
    }).catch(error => {
        reject(error.response.data);
    });
  });
}
