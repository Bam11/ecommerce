import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CheckoutHeader from './checkout-header'
import OrderSummary from './order-summary';
import PaymentSummary from './payment-summary';
import './checkout.css'

export default function Checkout({ cart, loadCart }) {
  const [delivery, setDelivery] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const res = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDelivery(res.data);
    }

    fetchCheckoutData();
  }, []);

  useEffect(()=>{
    const fetchPaymentSummary = async () => {
      const res = await axios.get("/api/payment-summary");
      setPaymentSummary(res.data);
    }

    fetchPaymentSummary();
  }, [cart])

  return (
    <div>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />

      <CheckoutHeader cart={cart}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} delivery={delivery} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </div>
  )
}
