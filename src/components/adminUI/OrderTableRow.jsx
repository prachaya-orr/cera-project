import React from 'react';

function OrderTableRow({
  orderId,
  productId,
  productName,
  quantity,
  netPrice,
  status,
  customerName,
}) {
  return (
    <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
      <th
        scope='row'
        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {orderId}
      </th>
      <td className='py-4 px-6'>{productId}</td>
      <td className='py-4 px-6'>{productName}</td>
      <td className='py-4 px-6'>{quantity}</td>
      <td className='py-4 px-6'>฿{netPrice}</td>
      <td className='py-4 px-6'>{status}</td>
      <td className='py-4 px-6'>{customerName}</td>
    </tr>
  );
}

export default OrderTableRow;
