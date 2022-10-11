import { createContext, useContext, useEffect, useState } from 'react';
import { createCartApi, getCartApi } from '../api/cartApi';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = async (productId) => {
   { const res = await createCartApi(productId);
    // console.log(res);
    const setCart = (prev) => setCartItems([...prev, res.data.JoinCartData]);
    setCart(cartItems);}
    console.log(cartItems);
  };

  const getCart = async () => {
    const res = await getCartApi();
    if (res.data.JoinCartData) {
      setCartItems([...res.data.JoinCartData]);
    }
  };

  useEffect(() => {
    try {
      getCart();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <CartContext.Provider
      value={{ addItemToCart, cartItems, setCartItems, getCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
