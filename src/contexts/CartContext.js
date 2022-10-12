import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  createCartApi,
  getCartApi,
  deleteCartItemApi,
  updateCartApi,
} from '../api/cartApi';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // const [reRender, setRerender] = useState({});

  console.log(cartItems);
  const addItemToCart = async (productId) => {
    try {
      console.log(productId);
      cartItems.forEach((item) => {
        if (item.productId === productId) {
          console.log(item.productId);
          throw new Error();
        }
      });
      const res = await createCartApi(productId);
      setCartItems((prev) => [...prev, res.data.JoinCartData]);
    } catch (err) {
      toast.error('Already In Cart');
    }
  };

  const getCart = async () => {
    const res = await getCartApi();
    if (res.data.JoinCartData) {
      setCartItems([...res.data.JoinCartData]);
    }
  };

  const deleteCartItem = async (id) => {
    await deleteCartItemApi(id);
    setCartItems(cartItems.filter((cartItem) => id !== cartItem.id));
  };

  const updateCart = async (cartItem) => {
    updateCartApi(cartItem);
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
      value={{
        addItemToCart,
        cartItems,
        setCartItems,
        getCart,
        deleteCartItem,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
