import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Checkout from './pages/checkout'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
    </Routes>
  )
} 

export default App
