import axios from '../config/axios';

export const createCartApi = (input) => axios.post('users/cart', input);
export const getCartApi = () => axios.get('users/cart/getCart');
export const deleteCartApi = (cartId) =>
  axios.delete(`users/cart/deleteCart/${cartId}`);

// export const updateAmountApi = ({ cartId, quantity }) =>
//   axios.patch(`users/cart/updateQuantity`, { cartId, quantity });
