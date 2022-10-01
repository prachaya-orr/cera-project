import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="border flex-auto ">
      <div className="  bg-[#194569] w-full h-[25px]"></div>
      <div className="= h-[80px] flex items-center  justify-between px-[220px] ">
        <Link
          to="/"
          className="flex items-center w-[175px] bg-white space-x-1 "
        >
          <h1>Cera</h1>
          <div>
            <div className="text-bold font-serif font-bold text-blue-900/90 text-sm">
              G A I U S
            </div>

            <div className="text-bold font-serif font-bold text-blue-900/80 text-sm">
              PROPERTY
            </div>
          </div>
        </Link>
        <div className=" w-4/12 flex items-center">
          <input
            type="search"
            className="form-control relative flex-auto w-3/5  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
            placeholder="Find a location"
          />
          <button className="bg-sky-800 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 ">
            Search
          </button>
        </div>
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <Link to={'/'} className=" text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={'/'} className=" text-lg">
              About us
            </Link>
          </li>
          <li>
            <Link to={'/login'} className=" text-lg">
              Sign in
            </Link>
          </li>
          <li>
            <Link to={'/mylist'} className=" text-lg">
              list
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
