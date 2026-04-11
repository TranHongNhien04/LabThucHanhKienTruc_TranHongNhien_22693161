// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import FoodList from "./pages/FoodList";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* 👈 thêm dòng này */}  
      <Routes>
        <Route path="/" element={<Login />} />
  <Route path="/foods" element={<FoodList />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

