import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AdminPage from './pages/AdminPage';
import FormPage from './pages/FormPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      {/* <CartProvider> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/newProduct" element={<FormPage />} />
          <Route path="/admin/newProduct/:id" element={<FormPage />} />
        </Routes>
      {/* </CartProvider> */}
    </>
  );
}

export default App;