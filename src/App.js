import React from 'react';
import Home from './page/Home'
import ProductDetail from './page/ProductDetail'
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './page/Cart';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
