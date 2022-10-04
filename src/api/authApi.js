import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = ({ email, password }) =>
  axios.post('/auth/login', { email, password });
export const getMe = () => axios.get('/auth/me');
