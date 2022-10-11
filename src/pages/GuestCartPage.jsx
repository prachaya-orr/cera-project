import React from 'react';
import CartItem from '../components/Cart/CartItem';
import { useCart } from '../contexts/CartContext';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col items-start p-0 gap-[48px] w-[100vw] mt-12 mb-[108px]">
      <div className="flex flex-row items-start py-0 px-[88px] gap-[10px]">
        <p className="lg-subtitle-1">Home &gt;</p>
        <p>My Cart</p>
      </div>
      <div className="flex flex-col items-start p-0 gap-6 w-[100vh]">
        <div className="flex flex-col items-center p-0 gap-[108px] w-[100vw]">
          {/* Container */}
          <div className="flex flex-col items-center p-0 gap-[108px]">
            <p className="lg-h3 text-center tracking-[-0.02em]">My Cart</p>

            <div className="flex flex-col items-center py-0 px-[176px] ">
              <div className="flex flex-col justify-center items-start p-0  gap-[24px]  w-[100%] border-1 border-gray-400"></div>
              {cartItems?.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  productName={cartItem.productName}
                  unitPrice={cartItem.unitPrice}
                  color={cartItem.color}
                  size={cartItem.size}
                  countStock={cartItem.countStock}
                  imageUrl={cartItem.imageUrl}
                />
              ))}

              <div className="flex flex-col gap-2 mt-8">
                <button className="bg-black text-white font-bold p-5">
                  Check Out
                </button>
                <div className="text-gray-500 underline">
                  CONTINUE TO SHOPPING
                </div>
              </div>
            </div>
          </div>
          {/* close Container */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
