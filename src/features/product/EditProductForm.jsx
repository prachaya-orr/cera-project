import React, { useState } from 'react';
import EditProductTableRow from '../../components/adminUI/EditProductTableRow';
import { useProduct } from '../../contexts/ProductContext';

function EditProductForm() {
  const { products } = useProduct();
  const [isShow, setIsShow] = useState({});

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Size
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
            <th scope="col" className="py-3 px-6">
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <EditProductTableRow
                key={index}
                productId={product.id}
                productName={product.productName}
                imageUrl={product.ProductImages[0].imageUrl}
                color={product.ProductLists[0].colorValue}
                size={product.ProductLists[0].sizeValue}
                unitPrice={product.unitPrice}
                countStock={product.ProductLists[0].countStock}
                onClick={(e) => setIsShow({ [index]: !isShow[index] })}
                isShow={isShow[index]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EditProductForm;
