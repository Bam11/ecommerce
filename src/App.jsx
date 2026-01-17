import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Orders from './pages/orders'
import Tracking from './pages/tracking'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="tracking" element={<Tracking />}></Route>
    </Routes>
  )
} 

export default App
