import { useContext, createContext, useEffect, useState } from 'react';
import * as orderService from '../api/orderApi';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState(null);
  console.log(orders);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const res = await orderService.getAllOrdersApi();
      setOrders(res.data.OrderItems);
    } catch (err) {
      console.log('Fetch Products Error');
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        fetchAllOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  return useContext(OrderContext);
};

export default OrderContextProvider;
