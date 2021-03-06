import axios from 'axios';
import Notification from './Toast';
import MAuth from '../model/MAuth';

const http = {

  get({ url, data, params, errorHandler, headers }) {
    return this.send('get', url, data, params, errorHandler, headers);
  },

  post({ url, data, params, errorHandler, headers }) {
    return this.send('post', url, data, params, errorHandler, headers);
  },

  put({ url, data, params, errorHandler, headers }) {
    return this.send('put', url, data, params, errorHandler, headers);
  },

  patch({ url, data, params, errorHandler, headers }) {
    return this.send('patch', url, data, params, errorHandler, headers);
  },

  delete({ url, data, params, errorHandler, headers }) {
    return this.send('delete', url, data, params, errorHandler, headers);
  },

  //try to catch error in this param
  send(method, url, data, params, errorHandler, headers) {
    let config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': localStorage.getItem("JWT"),
        ...headers
      },
      method: method,
      url: url,
      data: data,
      params: params,
    };
    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => resolve(response))
        .catch(({ response, message, request }) => {
          if (response.status === 401) {
            MAuth.logout();
          }
          if (errorHandler) {
            errorHandler(response);
          } else {
            Notification.pushError(response.data.error || message, response.status);
          }
        });
    })
  }
}

export default http;