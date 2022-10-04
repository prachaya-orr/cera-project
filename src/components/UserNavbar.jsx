import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserNavbar = () => {
  const { logout, user } = useAuth();
  useEffect(() => {}, []);

  return (
    <>
      <div
        className="Container flex flex-row justify-around items-center px-12 py-4 gap-[155px] h-[72px] w-100% "
        style={{ borderBottom: '1px solid #BDBDBD' }}
      >
        <div className="flex flex-row  justify-around items-center p-0 gap-[64px] w-[387px] h-[29px]">
          <Link to={'/'}>
            <span className="font-bold text-[24px] leading-[29px] w-[52px] h-[29px]">
              cera
            </span>
          </Link>
          <ul className="flex flex-row items-start p-0 gap-6 w-[271px] h-[17px] list-none m-0 ">
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/product'}>SHOP</Link>
            </li>
            <li>
              <Link to={'/aboutCera'}>ABOUT&nbsp;CERA</Link>
            </li>
            <li>
              <Link to={'/contactUs'}>CONTACT&nbsp;US</Link>
            </li>
          </ul>
        </div>
        <div className="flex p-0 ">
          <div className="flex items-center gap-6">
            <form className="relative bg-[#F9F9F9] rounded-full ">
              <input
                type="text"
                name="searchBar"
                placeholder="search..."
                className="bg-[#F9F9F9] border-0 rounded-full w-72"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"></i>
            </form>
            <div className="flex flex-row items-center gap-[16px]">
              <Link to={'/cart'}>
                <div className="relative">
                  {/* <i
                    className="fa fa-shopping-cart text-xl"
                    aria-hidden="true"
                  ></i>  */}
                  <span className="material-symbols-outlined translate-y-[2px]">shopping_cart</span>
                  <div className="absolute right-0 top-0 bg-orange-400 opacity-80 rounded-full text-[12px] text-center -translate-y-1/2 translate-x-1/3 text-white w-fit px-[4px] h-4">
                    3
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-[24px]">
                <Link to={'/myWishlist'}>
                  <i className="fa-regular fa-heart text-[21px] px-1 "></i>
                </Link>
                <Link to={'/account'}>
                  <span className="font-bold -translate-x-6">
                    {user.firstName}
                  </span>
                </Link>
                <button
                  className="font-bold -ml-3 bg-red-400 px-2 py-1 rounded-full text-white translate-x-24"
                  onClick={logout}
                >
                  Log&nbsp;out
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
