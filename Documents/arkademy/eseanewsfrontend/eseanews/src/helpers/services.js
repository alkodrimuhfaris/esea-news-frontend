import {default as axios} from 'axios';

export default (token = false) => {
  return axios.create({
    baseURL: 'http://52.200.32.180:8800/',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};
