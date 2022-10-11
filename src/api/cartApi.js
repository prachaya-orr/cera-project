import axios from '../config/axios';

export const createCartApi = (productId) => axios.post('users/cart', productId);
export const getCartApi = () => axios.get('users/cart');
