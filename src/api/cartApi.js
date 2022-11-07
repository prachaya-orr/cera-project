import axios from '../config/axios';

export const createCartApi = (productId) =>
  axios.post('users/cart', { productId: productId });

export const getCartApi = () => axios.get('users/cart');

export const deleteCartItemApi = (cartId) =>
  axios.delete(`users/cart/${cartId}`);

export const clearCartApi = () => axios.delete('users/cart');

export const updateCartApi = (cartItem) => axios.patch('users/cart/', cartItem);

export const getTotalPriceApi = () => axios.get('users/cart/totalPrice');
