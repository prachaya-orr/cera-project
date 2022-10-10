import React, { useState } from 'react';
// import { useProduct } from '../../contexts/ProductContext';
import EditProductModal from './EditProductModal';

function EditProductTableRow({
  productId,
  productName,
  imageUrl,
  color,
  size,
  unitPrice,
  countStock,
  onClick,
  isShow,
}) {
  const [openModal, setOpenModal] = useState(false);

  // const { getOne } = useProduct();
  // const idEdit = async () => {
  //   try {
  //     const res = await adminApi.getOne(productId);
  //     console.log(res.data);
  //     const { thisProduct } = res.data;
  //   } catch (err) {
  //     toast.error(err.response?.data.message);
  //   }
  // };

  // idEdit();

  // const [item, setItem] = useState({});

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
          <div>
            <img
              src={imageUrl}
              alt="ProductImage"
              className={` ${isShow ? '' : 'hidden'}  w-1/6 h-1/6 rounded`}
            />
          </div>
        </div>
      </td>
      <td className="py-4 px-6">{color}</td>
      <td className="py-4 px-6">{size}</td>
      <td className="py-4 px-6">฿{unitPrice}</td>
      <td className="py-4 px-6">
        <div
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => setOpenModal(!openModal)}
        >
          Edit
        </div>
        {openModal && (
          <EditProductModal
            productId={productId}
            imageUrl={imageUrl}
            productName={productName}
            size={size}
            color={color}
            unitPrice={unitPrice}
            countStock={countStock}
            onCloseModal={() => setOpenModal(false)}
          />
        )}
      </td>
      <td className="py-4 px-6">{countStock}</td>
    </tr>
  );
}

export default EditProductTableRow;
