import React from 'react';
import CartItem from '../components/Cart/CartItem';

function ProductPage() {
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
              <div className="flex flex-col items-start p-0 gap-6 w-[80vw]">
                <div className="flex flex-col justify-center items-start p-0 h-[288px] gap-[24px]  w-[100%] border-y-2 border-gray-400">
                  <div className="flex flex-row justify-around p-0 gap-12 min-w-full h-[240px]">
                    <div className="w-[180px] h-[240px]">
                      <img
                        src="https://res.cloudinary.com/dtyk9alph/image/upload/v1665385383/1665385380479557716445.jpg"
                        alt="photoImage"
                        className="min-h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start py-[40px] gap-[24px] w-[50vw] bg-white">
                      <div className="w-[100%] bg-white h-[45%] flex flex-row justify-between">
                        <div>
                          <div>MOCK1</div>
                          <div className="text-gray-500">ROOKIE Collection</div>
                          <div className="text-gray-500">Size : L</div>
                        </div>
                        <div>
                          <div>
                            <p className="lg-subtitle-2">
                              THB &nbsp; &nbsp;&nbsp;1,690
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[100%] bg-white h-[20%] flex flex-row justify-between">
                        <div className="flex flex-row gap-4 items-center">
                          <button className="p-2  bg-slate-200 rounded">
                            -
                          </button>
                          <p className="">1</p>
                          <button className="p-2 bg-slate-200 rounded">
                            +
                          </button>
                        </div>
                        <div className="text-gray-500 underline">Remove</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center p-0 gap-6 w-[80vw]">
                <div className="flex flex-col justify-center items-start p-0 h-[288px] gap-[24px] border-b-2 w-[100%] border-gray-400">
                  <div className="flex flex-row justify-around p-0 gap-12 min-w-full h-[240px]">
                    <div className="w-[180px] h-[240px]">
                      <img
                        src="https://res.cloudinary.com/dtyk9alph/image/upload/v1665385383/1665385380479557716445.jpg"
                        alt="photoImage"
                        className="min-h-full"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-start py-[40px] gap-[24px] w-[50vw] bg-white">
                      <div className="w-[100%] bg-white h-[45%] flex flex-row justify-between">
                        <div>
                          <div>MOCK1</div>
                          <div className="text-gray-500">ROOKIE Collection</div>
                          <div className="text-gray-500">Size : L</div>
                        </div>
                        <div>
                          <div>
                            <p className="lg-subtitle-2">
                              THB &nbsp; &nbsp;&nbsp;1,690
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[100%] bg-white h-[20%] flex flex-row justify-between">
                        <div className="flex flex-row gap-4 items-center">
                          <button className="p-2  bg-slate-200 rounded">
                            -
                          </button>
                          <p className="">1</p>
                          <button className="p-2 bg-slate-200 rounded">
                            +
                          </button>
                        </div>
                        <div className="text-gray-500 underline">Remove</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="bg-black text-white font-bold p-5">
                    Check Out
                  </button>
                  <div className="text-gray-500 underline">
                    CONTINUE TO SHOPPING
                  </div>
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

export default ProductPage;
