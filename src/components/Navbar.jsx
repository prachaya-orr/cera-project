import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className="Container h-[60px] bg-gray-300">
        <div className="Wrapper py-[10px] px-[20px] flex justify-between ">
          <div className="Left flex-1 bg-slate-600"><span className='text-sm cursor-pointer'>EN</span></div>
          <div className="Center flex-1 bg-slate-500">Center</div>
          <div className="Right flex-1 bg-slate-400">Right</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
