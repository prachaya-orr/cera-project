import React from 'react';

function Wishlist() {
  return (
    <div className="flex flex-col items-start p-0 gap-[48px] w-[100vw] mt-12 mb-[108px]">
      <div className="flex flex-row items-start py-0 px-[88px] gap-[10px]">
        <p className="lg-subtitle-1">Home &gt;</p>
        <p>Wish list</p>
      </div>
      <div className="flex flex-col items-start p-0 gap-6 w-[100vh]">
        <div className="flex flex-col items-center p-0 gap-[108px] w-[100vw]">
          {/* Container */}
          <div className="flex flex-col items-center p-0 gap-[108px]">
            {/* LogoName */}
            <p className="lg-h3 text-center tracking-[-0.02em]">Wish list</p>
            {/* close LogoName */}
            {/* CardProduct */}
            <div className=" container 2xl flex flex-row flex-wrap justify-center items-center py-0 px-[88px] gap-[24px]">
              Pending.....
            </div>
          </div>
          {/* close Container */}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
