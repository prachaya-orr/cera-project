import React, { useState } from 'react';

function CartItem({
  productName,
  unitPrice,
  color,
  size,
  countStock,
  imageUrl,
}) {
  const [quantityOrder, setQuantityOrder] = useState(1);
  return (
    <div className="flex flex-col items-center p-0 gap-6 w-[80vw]">
      <div className="flex flex-col justify-center items-start p-0 h-[288px] gap-[24px] border-b-2 w-[100%] border-gray-400">
        <div className="flex flex-row justify-around p-0 gap-12 min-w-full h-[240px]">
          <div className="w-[180px] h-[240px]">
            <img src={imageUrl} alt="photoImage" className="min-h-full" />
          </div>

          <div className="flex flex-col justify-between items-start py-[40px] gap-[24px] w-[50vw] bg-white">
            <div className="w-[100%] bg-white h-[45%] flex flex-row justify-between">
              <div>
                <div>{productName}</div>
                <div className="text-gray-500">Cera's Collection</div>
                <div className="text-gray-500">Color : {color}</div>
                <div className="text-gray-500">Size : {size}</div>
              </div>
              <div>
                <div>
                  <p className="lg-subtitle-2">
                    THB &nbsp; &nbsp;&nbsp;{unitPrice}
                  </p>
                  <p className="text-end">In Stock: {countStock}</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-white h-[20%] flex flex-row justify-between">
              <div className="flex flex-row gap-4 items-center">
                <button
                  className="p-2  bg-slate-200 rounded"
                  onClick={() => {
                    if (quantityOrder > 0) {
                      setQuantityOrder(quantityOrder - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="text-lg">{quantityOrder}</p>
                <button
                  className="p-2 bg-slate-200 rounded"
                  onClick={() => {
                    setQuantityOrder(quantityOrder + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="text-gray-500 underline">Remove</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
