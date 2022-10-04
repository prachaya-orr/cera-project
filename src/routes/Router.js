import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthLayout from '../layouts/auth/AuthLayout';
import GuestLayout from '../layouts/auth/GuestLayout';
import AboutCera from '../pages/AboutCera';
import Account from '../pages/Account';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import Wishlist from '../pages/Wishlist';

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/aboutCera" element={<AboutCera />} />
            <Route path="/contactUs" element={<ContactUsPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/myWishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<GuestLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/aboutCera" element={<AboutCera />} />
            <Route path="/contactUs" element={<ContactUsPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
