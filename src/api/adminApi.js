import axios from '../config/axios';

export const createProduct = (input) => axios.post('/admin/createProduct', input);
