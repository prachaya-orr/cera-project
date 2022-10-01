import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div
        className="Container flex flex-row justify-between items-center px-12 py-4 gap-[155px] h-[72px] w-2xl "
        style={{ borderBottom: '1px solid #BDBDBD' }}
      >
        <div className="flex flex-row items-center p-0 gap-[64px] w-[387px] h-[29px]">
          <span className="font-bold text-[24px] leading-[29px] w-[52px] h-[29px]">
            cera
          </span>
          <ul className="flex flex-row items-start p-0 gap-6 w-[271px] h-[17px] list-none m-0 ">
            <li>
              <Link to={'/'}>SHOP</Link>
            </li>
            <li>
              <Link to={'/'}>ABOUT&nbsp;CERA</Link>
            </li>
            <li>
              <Link to={'/'}>CONTACT&nbsp;US</Link>
            </li>
          </ul>
        </div>
        <div className="flex p-0 ">
          <div className="flex items-center gap-6">
            <form className="relative bg-[#F9F9F9]  ">
              <input
                type="text"
                name=""
                placeholder="search..."
                className="bg-[#F9F9F9] border-0"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"></i>
            </form>
            <div className="flex flex-row items-center gap-[16px]">
              <ShoppingCartOutlinedIcon fontSize="small" />
              <div className="flex items-center gap-[23px]">
                <i className="fa-regular fa-user"></i>
                <span className='font-bold'>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
