import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as cartService from '../api/cartApi';
import { useAuth } from './AuthContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    const fetchPriceCart = async () => {
      try {
        
        await getPrice();
        await getCart();
      } catch (err) {
        console.log(err);
      }
    };
    fetchPriceCart();
  }, [user]);

  const getPrice = async () => {
    try {
      const res = await cartService.getTotalPriceApi();
      setTotalPrice(res.data.totalPrice);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(cartItems);
  const addItemToCart = async (productId) => {
    try {
      console.log(productId);
      cartItems.forEach((item) => {
        if (item.productId === productId) {
          console.log(item.productId);
          throw new Error();
        }
      });
      const res = await cartService.createCartApi(productId);
      setCartItems((prev) => [...prev, res.data.JoinCartData]);
    } catch (err) {
      toast.error('Already In Cart');
    }
  };

  const getCart = async () => {
    const res = await cartService.getCartApi();
    if (res.data.JoinCartData) {
      setCartItems([...res.data.JoinCartData]);
    }
  };

  const deleteCartItem = async (id) => {
    await cartService.deleteCartItemApi(id);
    setCartItems(cartItems.filter((cartItem) => id !== cartItem.id));
  };

  const updateCart = async (cartItem) => {
    await cartService.updateCartApi(cartItem);
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
        getPrice,
        totalPrice,
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
