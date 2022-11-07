import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import OrderContextProvider from './contexts/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
