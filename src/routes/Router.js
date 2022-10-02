import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../layouts/auth/AuthLayout';
import AboutCera from '../pages/AboutCera';
import ContactUsPage from '../pages/ContactUsPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/aboutCera" element={<AboutCera />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default Router;
