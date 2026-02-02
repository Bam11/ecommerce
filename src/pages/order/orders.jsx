import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import OrdersGrid from './orders-grid';
import './orders.css';

export default function Orders({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async ()=>{
      const res = await axios.get("/api/orders?expand=products");
      setOrders(res.data);
    }

    fetchOrderData();
  },[]);

  return (
    <div>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />

      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart}/>
      </div>
    </div>
  )
}
