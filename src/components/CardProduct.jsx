import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function CardProduct({
  productId,
  productName,
  unitPrice,
  color,
  size,
  countStock,
  imageUrl,
}) {
  const { addItemToCart } = useCart();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-start p-0 gap-4 w-[298px] h-[510px]">
        <Link to="/shop">
          <img
            src={imageUrl}
            alt="use1"
            className="w-[298px] h-[400px] bg-slate-200"
          />
        </Link>
        <div className="flex flex-col justify-start p-0 gap-2 w-[298px] h-[94px]">
          <div className="felx flex-col items-start p-0 gap-2">
            <p className="lg-subtitle-2">{productName}</p>
            <p className="lg-body-1 text-black text-opacity-50">
              THB {unitPrice}
            </p>
          </div>
          <div className="flex flex-row items-start p-0 gap-2 w-[298px] h-[40px]">
            {isSelected ? (
              <button className="text-white text-center lg-button-medium border-1 p-2 w-[202px] h-[40px] bg-gray-900 focus:ring-blue-500  hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Already In Cart
              </button>
            ) : (
              <button
                className="text-center lg-button-medium border-1 p-2 w-[202px] h-[40px] bg-gray-50 focus:ring-blue-500  hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={() => {
                  addItemToCart(
                    productId
                  );
                  setIsSelected(true);
                }}
              >
                Add to cart
              </button>
            )}
            <form onSubmit={(e) => e.preventDefault()}>
              <button className="block  w-[40px] h-[40px] text-sm text-black bg-gray-50 rounded-sm border border-gray-900 focus:ring-red-500 hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                {size}
              </button>
            </form>
            <button className="block  w-[40px] h-[40px] text-sm text-black bg-gray-50 rounded-sm border border-gray-900 focus:ring-red-500 hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
