import { Route, Routes } from 'react-router'
import Home from './pages/home/home'
import Checkout from './pages/checkout/checkout'
import Orders from './pages/order/orders'
import Tracking from './pages/tracking/tracking'
import ErrorPage from './pages/error-page'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="tracking" element={<Tracking />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  )
} 

export default App
