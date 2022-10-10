import axios from '../config/axios';

export const createProduct = (input) =>
  axios.post('/admin/createProduct', input);

export const deleteProduct = (id) => {
  return axios.delete(`/admin/editProducts/deleteProduct/${id}`);
};

export const updateProduct = (id, input) =>
	axios.patch(`/admin/editProducts/product/${id}`, input);


export const getOne = (id) => axios.get(`/admin/editProducts/getOne/${id}`);
