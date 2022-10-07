import axios from '../config/axios';

export const createProduct = (input) => axios.post('/addProduct/ ', input);
export const getProduct = () => axios.get('/shop')
