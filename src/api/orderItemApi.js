import axios from '../config/axios';

export const createOrderItemApi = () =>
axios.post('/orderItem');

