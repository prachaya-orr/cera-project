import axios from '../config/axios';

export const createProduct = (input) => axios.post('/admin/createProduct', input);

export const deleteProduct = (id) => {
	return axios.delete(`/admin/editProducts/deleteProduct/${id}`);
};
