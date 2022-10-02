import axios from 'axios';
import { API_ENDPOINTT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINTT_URL;

export default axios;
