import { useContext, createContext, useState, useEffect } from 'react';
import * as adminApi from '../api/adminApi';
import * as productApi from '../api/productApi';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  const fetchAllProducts = async () => {
    try {
      const res = await productApi.getAllProducts();
      setProducts(res.data.products);
    } catch (err) {
      console.log('Fetch Products Error');
    }
  };

  const createProduct = async (input) => {
    try {
      await adminApi.createProduct(input);
      fetchAllProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await adminApi.deleteProduct(id);
      fetchAllProducts();
    } catch (err) {
      console.log('Delete Error!');
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, createProduct, fetchAllProducts, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
