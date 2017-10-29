import { getUserToken } from './storage';

var axios = require('axios');

export const post = function(endpoint, body, params){
  return new Promise((resolve, reject) => {
    let token = getUserToken();
    let headers = token ? { Authorization: "JWT " + token } : {};
    axios.post(endpoint, body, {headers: headers}).then(response => {
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
    let headers = { Authorization: "JWT " + getUserToken() };
    axios.get(endpoint, {headers: headers}).then(response => {
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
