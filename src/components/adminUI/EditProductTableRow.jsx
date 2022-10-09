import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import ModalImage from '../Modal/ModalImage';

function EditProductTableRow({
  productName,
  imageUrl,
  color,
  size,
  unitPrice,
  countStock,
  onClick,
  isShow
}) {


  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {productName}
      </th>
      <td className="py-4 px-6">
        <div
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          onClick={onClick}
        >
          Show
          <img
            src={imageUrl}
            alt="ProductImage"
            className={` ${isShow ? '' : 'hidden'}  w-1/6 h-1/6 rounded`}
          />
        </div>
        {/* {isOpen && <ModalImage imageUrl={imageUrl} productName={productName} />} */}
      </td>
      <td className="py-4 px-6">{color}</td>
      <td className="py-4 px-6">{size}</td>
      <td className="py-4 px-6">฿ {unitPrice}</td>
      <td className="py-4 px-6">
        <Link
          to="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
      </td>
      <td className="py-4 px-6">{countStock}</td>
    </tr>
  );
}

export default EditProductTableRow;
