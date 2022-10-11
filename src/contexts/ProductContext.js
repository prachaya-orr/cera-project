import { useContext, createContext, useState, useEffect } from 'react';
import * as adminService from '../api/adminApi';
import * as productApi from '../api/productApi';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [products, setProducts] = useState(null);

  const fetchAllProducts = async () => {
    try {
      const res = await productApi.getAllProducts();
      setProducts(res.data.products);
    } catch (err) {
      console.log('Fetch Products Error');
    }
  };

  const getOne = async (id) => {
    try {
      await adminService.getOne(id);
    } catch (err) {
      console.log('getOne Error');
    }
  };

  const updateProduct = async (productId, input) => {
    try {
      await adminService.updateProduct(productId, input);
    } catch (err) {
      console.log('updateProduct Error');
    }
  };

  const createProduct = async (input) => {
    try {
      await adminService.createProduct(input);
      fetchAllProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await adminService.deleteProduct(id);
      fetchAllProducts();
    } catch (err) {
      console.log('Delete Error!');
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        fetchAllProducts,
        deleteProduct,
        getOne,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
