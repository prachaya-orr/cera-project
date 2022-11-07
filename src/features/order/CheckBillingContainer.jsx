import React from 'react';
import OrderTableRow from '../../components/adminUI/OrderTableRow';
import { useOrder } from '../../contexts/OrderContext';

function CheckBillingContainer() {
  const { orders } = useOrder();

  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Order Id
            </th>
            <th scope='col' className='py-3 px-6'>
              Product Id
            </th>
            <th scope='col' className='py-3 px-6'>
              Product Name
            </th>
            <th scope='col' className='py-3 px-6'>
              Quantity
            </th>
            <th scope='col' className='py-3 px-6'>
              Net Price
            </th>
            <th scope='col' className='py-3 px-6'>
              Status
            </th>
            <th scope='col' className='py-3 px-6'>
              Customer Name
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => {
            return (
              <OrderTableRow
                key={index}
                orderId={order.orderId}
                productId={order.productId}
                productName={order.Product.productName}
                quantity={order.quantity}
                netPrice={order.netPrice}
                status={order.Order.status}
                customerName={order.Order.User.firstName}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CheckBillingContainer;
