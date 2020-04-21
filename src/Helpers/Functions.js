import Axios from 'axios';

export function request(url, method, data = false) {

  const headers = {
    Accept: 'application/json'
  }

  let args = {
    headers,
    method: method,
    url: requestUrl,
    responseType: 'json',
    withCredentials: true
  }

  if (data) {
    args.data = data
  }

  return new Promise((resolve, reject) => {
    Axios(args).then(response => {
      const responseInfo = {
        message: response.data.message,
        method: response.config.method,
        status: response.status,
        statusText: response.statusText,
        url: response.config.url
      }
      env === 'development' && console.log('Request made: ', responseInfo)
      resolve(response.data)
    }).catch((error) => {
      reject(error);
    });
  });
}