import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';

function SearchComponent() {
  return (
    <div className="container invisible lg:visible xl:visible flex items-center relative -left-8">
      <div className="flex  border-gray-200 rounded">
        <input
          type="text"
          className="block w-full px-4 py-2 text-gray-700 bg-white  rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 text-whiteborder-l rounded text-ge ">
          <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
