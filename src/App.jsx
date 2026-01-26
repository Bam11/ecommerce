import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import axios from 'axios'
import Home from './pages/home/home'
import Checkout from './pages/checkout/checkout'
import Orders from './pages/order/orders'
import Tracking from './pages/tracking/tracking'
import ErrorPage from './pages/error-page'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () =>{
      const res = await axios.get("/api/cart-items?expand=product");
      setCart(res.data);
    }
      
    fetchAppData();
  }, [])

  return (
    <Routes>
      <Route index element={<Home cart={cart}/>} />
      <Route path="checkout" element={<Checkout cart={cart}/>} />
      <Route path="orders" element={<Orders cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<ErrorPage cart={cart} />} />
    </Routes>
  )
}

export default App
