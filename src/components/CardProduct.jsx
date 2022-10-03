import React from 'react';

function CardProduct() {
  return (
    <>
      <div className="flex flex-col justify-center items-start p-0 gap-4 w-[298px] h-[510px]">
        <img
          src="https://i.postimg.cc/gkbX0Qdm/use1.webp"
          alt="use1"
          className="w-[298px] h-[400px] bg-slate-200"
        />
        <div className="flex flex-col justify-start p-0 gap-2 w-[298px] h-[94px]">
          <div className="felx flex-col items-start p-0 gap-2">
            <p className="lg-subtitle-2">Men's Cera Scrub Tops</p>
            <p className="lg-body-1 text-black text-opacity-50">THB 1690</p>
          </div>
          <div className="flex flex-row items-start p-0 gap-2 w-[298px] h-[40px]">
            <button className="text-center lg-button-medium border-1 p-2 w-[202px] h-[40px] bg-gray-50 focus:ring-blue-500 hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              Add to cart
            </button>
            <form onSubmit={(e) => e.preventDefault()}>
              <select className="block p-2 mb-6 w-[65px] h-[40px] border-1 text-sm text-gray-900 bg-gray-50 border  hover:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option defaultValue value="M">
                  M
                </option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </form>
            <button className="block  w-[40px] h-[40px] text-sm text-red-900 bg-red-50 rounded-lg border border-gray-300 focus:ring-red-500 hover:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;