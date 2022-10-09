import React from 'react';
import { Link } from 'react-router-dom';

function EditProductForm() {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Size
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
            <th scope="col" className="py-3 px-6">
              In Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mock1
            </th>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Show
              </Link>
            </td>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">M</td>
            <td className="py-4 px-6">฿ 2999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
            <td className="py-4 px-6">13</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mock2
            </th>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Show
              </Link>
            </td>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">S</td>
            <td className="py-4 px-6">฿ 1999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
            <td className="py-4 px-6">13</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mock3
            </th>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Show
              </Link>
            </td>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">XL</td>
            <td className="py-4 px-6">฿ 99</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
            <td className="py-4 px-6">13</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mock4
            </th>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Show
              </Link>
            </td>
            <td className="py-4 px-6">Gray</td>
            <td className="py-4 px-6">L</td>
            <td className="py-4 px-6">฿ 799</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
            <td className="py-4 px-6">13</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mock5
            </th>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Show
              </Link>
            </td>
            <td className="py-4 px-6 ">Red</td>
            <td className="py-4 px-6">XS</td>
            <td className="py-4 px-6">฿ 999</td>
            <td className="py-4 px-6">
              <Link
                to="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
            <td className="py-4 px-6">13</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EditProductForm;
