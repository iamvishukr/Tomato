import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/LoginPopup'; // ✅ Add the missing import

const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setshowLogin={setshowLogin} />}
      
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
