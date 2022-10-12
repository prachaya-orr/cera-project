import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createCartApi, getCartApi, deleteCartItemApi } from '../api/cartApi';

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
      console.log('Note');
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
