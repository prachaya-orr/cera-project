import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (data) => {
    setCartItems((prev) => [...prev, data]);
  };

  const removeCartItem = (courseId) => {
    const cartItemFilter = cartItems.filter((item) => item.id !== courseId);
    setCartItems(cartItemFilter);
  };

  return (
    <CartContext.Provider
      value={{ addItemToCart, cartItems, setCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
