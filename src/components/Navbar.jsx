import React from 'react';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
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
              <Link to={'/shop'}>SHOP</Link>
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
                name=""
                placeholder="search..."
                className="bg-[#F9F9F9] border-0 rounded-full w-72"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"></i>
            </form>
            <div className="flex flex-row items-center gap-[16px]">
              <Link to={'/cart'}>
                <div className="relative">
                  {/* <i className="fa fa-shopping-cart text-xl" aria-hidden="true"></i>
                  <div className="absolute right-0 top-0 bg-orange-400 rounded-full text-[12px] text-center -translate-y-1/2 translate-x-1/2 text-white w-fit px-[4px] h-4">
                    3
                  </div> */}
                  <span className="material-symbols-outlined font-normal translate-y-[2px]">
                    shopping_cart
                  </span>
                  <div
                    className={`${
                      cartItems.length > 0 ? '' : 'hidden'
                    } absolute right-0 top-0   bg-orange-400 opacity-80 rounded-full text-[12px] text-center -translate-y-1/2 translate-x-1/3 text-white w-fit px-[4px] h-4`}
                  >
                    {cartItems.length > 0 ? cartItems.length : null}
                  </div>
                </div>
                {/* <CartBadge /> */}
                {/* <ShoppingCartOutlinedIcon fontSize="small" /> */}
              </Link>
              <Link to={'/login'}>
                <div className="flex items-center gap-[23px] pl-2">
                  <i className="fa-regular fa-user text-[21px]"></i>
                  <span className="font-bold">Login</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
