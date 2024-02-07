import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HomePage from './pages/HomePage'
import Footer from './layouts/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
