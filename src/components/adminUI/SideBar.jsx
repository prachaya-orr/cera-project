import React from 'react'

function SideBar() {
  return (
    <div className="absolute w-[355px] h-[982px] left-0 top-0">
    <div className="flex flex-col items-center bg-[#E0E0E0] p-2 gap-[19px] absolutee w-[324px] h-[100vh] left-[15px] top-[35px]">
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        Admin
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        Ohm Orr
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        Status Order
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        Add Product
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        Edit Product
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        SETTING
      </button>
      <button
        type="button"
        className="w-[324px] h-[114px] bg-[#EEEEEE] shadow-lg rounded-full p-2 hover:bg-[#4425FF] lg-h2 hover:text-white"
      >
        LogOut
      </button>
    </div>
  </div>
  )
}

export default SideBar