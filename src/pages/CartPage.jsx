import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import loadOmise from '../utils/scripts/loadOmise';
import * as paymentService from '../api/paymentApi';
import * as orderService from '../api/orderApi';
import * as orderItemService from '../api/orderItemApi';
import * as cartItemService from '../api/cartApi';
import { toast } from 'react-toastify';
import { useOrder } from '../contexts/OrderContext';

function CartPage() {
  const { cartItems, totalPrice, getCart } = useCart();
  const [loaded, setLoaded] = useState(false);
  const { user } = useAuth();
  const [charge, setCharge] = useState(null);
  const { fetchAllOrders } = useOrder();

  const navigate = useNavigate();

  useEffect(() => {
    loadOmise(() => {
      setLoaded(true);
    });
  }, [charge]);

  let OmiseCard = window.OmiseCard;

  OmiseCard?.configure({
    publicKey: 'pkey_test_5tipgjhhwdna10j7tym',
    currency: 'thb',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cera_Home_Care_Logo.jpg/640px-Cera_Home_Care_Logo.jpg',
    frameLabel: 'Cera',
    submitLabel: 'Pay now',
    buttonLabel: 'Confirm and pay',
  });

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMehod: 'credit_card',
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton('#credit-card');
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      frameDescription: 'by Prachaya',
      amount: totalPrice * 100,
      onCreateTokenSuccess: async (token) => {
        await createCreditCardCharge(
          user.email,
          user.firstName,
          +totalPrice * 100, // unit amount sent to Omise is Satang Unit
          token
        );
        toast.success('success Payment');
        await orderItemService.createOrderItemApi();
        await orderService.updateStatusOrderApi();
        await cartItemService.clearCartApi();
        getCart();
        toast.success('success createOrder, we will send your product soon.');
        fetchAllOrders();
        navigate('/');
      },
      onFormClose: () => {},
    });
  };

  const handleClickConfirmPayment = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const createCreditCardCharge = async (
    email,
    name,
    amount,
    token,
    headers = {
      'Content-Type': 'application/json',
    }
  ) => {
    try {
      const res = await paymentService.payment({
        email,
        name,
        amount,
        token,
        headers,
      });
      console.log(res);
      setCharge({ amount: res.data.amount.amount, status: res.data.status });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col items-start p-0 gap-[48px] w-[100vw] mt-12 mb-[108px]'>
      <div className='flex flex-row items-start py-0 px-[88px] gap-[10px]'>
        <p className='lg-subtitle-1'>Home &gt;</p>
        <p>My Cart</p>
      </div>
      <div className='flex flex-col items-start p-0 gap-6 w-[100vh]'>
        <div className='flex flex-col items-center p-0 gap-[108px] w-[100vw]'>
          {/* Container */}
          <div className='flex flex-col items-center p-0 gap-[108px]'>
            <p className='lg-h3 text-center tracking-[-0.02em]'>My Cart</p>

            <div className='flex flex-col items-center py-0 px-[176px] '>
              <div className='flex flex-col justify-center items-start p-0  gap-[24px]  w-[100%] border-1 border-gray-400'></div>
              {cartItems?.map((cartItem, index) => (
                <CartItem
                  key={index}
                  id={cartItem.id}
                  productId={cartItem.productId}
                  quantity={cartItem.quantity}
                  productName={cartItem.Product.productName}
                  unitPrice={cartItem.Product.unitPrice}
                  color={cartItem.Product.ProductLists[0].colorValue}
                  size={cartItem.Product.ProductLists[0].sizeValue}
                  countStock={cartItem.Product.ProductLists[0].countStock}
                  imageUrl={cartItem.Product.ProductImages[0].imageUrl}
                />
              ))}
              <div className='flex flex-row justify-between w-full px-[4.75%] py-1'>
                {cartItems.length === 0 ? (
                  <div className='flex justify-center w-full '>
                    No item in cart
                  </div>
                ) : (
                  <>
                    <div className='font-semibold tracking-[-0.02em]'>
                      Total
                    </div>
                    <div className='font-semibold tracking-[-0.02em]'>
                      THB &nbsp;&nbsp;{+totalPrice}
                    </div>
                  </>
                )}
              </div>
              <div className='flex flex-col gap-2 mt-8'>
                {loaded ? (
                  <form>
                    <button
                      className='bg-black text-white font-bold p-5 w-full text-center hover:cursor-pointer'
                      id='credit-card'
                      onClick={handleClickConfirmPayment}
                    >
                      Check Out
                    </button>
                  </form>
                ) : (
                  ''
                )}

                <Link to={'/shop'} className='text-gray-500 underline'>
                  CONTINUE TO SHOPPING
                </Link>
              </div>
            </div>
          </div>
          {/* close Container */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
