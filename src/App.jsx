import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import axios from 'axios'
import Home from './pages/home/home'
import Checkout from './pages/checkout/checkout'
import Orders from './pages/order/orders'
import Tracking from './pages/tracking/tracking'
import ErrorPage from './pages/error-page'
import './App.css'

window.axios = axios;

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () =>{
    const res = await axios.get("/api/cart-items?expand=product");
    setCart(res.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<Home cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<Orders cart={cart} loadCart={loadCart}/>} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<ErrorPage cart={cart} />} />
    </Routes>
  )
}

export default App
