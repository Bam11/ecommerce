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
    axios.get("/api/cart-items?expand=product")
      .then((res) => {
        setCart(res.data);
      })
  }, [])

  return (
    <Routes>
      <Route index element={<Home cart={cart}/>}></Route>
      <Route path="checkout" element={<Checkout cart={cart}/>}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="tracking" element={<Tracking />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App
