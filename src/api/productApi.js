import axios from '../config/axios';

export const createProduct = (input) => axios.post('/addProduct/m ', input);
export const getProduct = () => axios.get('/product')

export const getMe = () => axios.get('/auth/me');