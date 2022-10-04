import axios from 'axios';
import { getAccessToken } from '../utils/localStorage';
import { API_ENDPOINTT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINTT_URL;

axios.interceptors.request.use(
  (config) => {
    // if (config.url === '/auth/login') return config;
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default axios;
