import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AdminPage from './pages/AdminPage';
import FormPage from './pages/FormPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import UserRoutes from './components/route/UserRoutes';
import GuestRoutes from './components/route/GuestRoutes';
import AdminRoutes from './components/route/AdminRoutes';

function App() {

  return (
    <>
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<UserRoutes />}>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/newProduct" element={<FormPage />} />
          <Route path="/admin/newProduct/:id" element={<FormPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;