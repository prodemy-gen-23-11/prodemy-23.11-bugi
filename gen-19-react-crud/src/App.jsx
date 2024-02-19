import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AdminPage from './pages/AdminPage';
import FormPage from './pages/FormPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/newProduct" element={<FormPage />} />
        <Route path="/admin/newProduct/:id" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;