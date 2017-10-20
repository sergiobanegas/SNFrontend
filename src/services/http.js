import { API_URL} from '../config';

var axios = require('axios');

export const post = function(endpoint, body, params){
  return new Promise((resolve, reject) => {
    axios.post(API_URL + endpoint, body).then(response => {
      if (!response.data){
        reject();
      } else {
        resolve(response);
      }
    }).catch(error => {
        reject(error);
    });
  });
}
