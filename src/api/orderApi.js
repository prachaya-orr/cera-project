import axios from '../config/axios';

export const createOrderApi = () => axios.post('/order');

export const updateStatusOrderApi = () => axios.patch('/order');

export const getAllOrdersApi = () => axios.get('/admin/checkbilling');
