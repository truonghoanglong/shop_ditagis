import React,{useState} from 'react';
import Home from './page/Home'
import ProductDetail from './page/ProductDetail'
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './page/Cart';
import {CartContext} from './contexts/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cart,addCart] = useState([])
  return (
    <>
      <CartContext.Provider value={{cart,addCart}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </CartContext.Provider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </>
  );
}

export default App;
