import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthLayout from '../layouts/auth/AuthLayout';
import GuestLayout from '../layouts/auth/GuestLayout';
import AboutCera from '../pages/AboutCera';
import Admin from '../pages/Admin/Admin';
import Account from '../pages/Account';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';
import Wishlist from '../pages/Wishlist';
import AddProductPage from '../pages/Admin/AddProductPage';
import EditProductPage from '../pages/Admin/EditProductPage';
import CheckBillingPage from '../pages/Admin/CheckBillingPage';
import ProductPage from '../pages/ProductPage';
import GuestCartPage from '../pages/GuestCartPage';

function Router() {
  const { user } = useAuth();
  // console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/aboutCera' element={<AboutCera />} />
            <Route path='/contactUs' element={<ContactUsPage />} />
            <Route path='/users/cart' element={<CartPage />} />
            <Route path='/checkOut' element={<CartPage />} />
            <Route path='/myWishlist' element={<Wishlist />} />
            <Route path='/account' element={<Account />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
          {user.isAdmin ? (
            <>
              <Route path='/admin' element={<Admin />} />
              <Route path='/admin/createProduct' element={<AddProductPage />} />
              <Route path='/admin/editProducts' element={<EditProductPage />} />
              <Route
                path='/admin/checkBilling'
                element={<CheckBillingPage />}
              />
            </>
          ) : (
            <>
              <Route path='*' element={<Navigate to='/' />} />
            </>
          )}
        </>
      ) : (
        <>
          <Route path='/' element={<GuestLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/aboutCera' element={<AboutCera />} />
            <Route path='/contactUs' element={<ContactUsPage />} />
            <Route path='/cart' element={<GuestCartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
