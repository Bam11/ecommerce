import React from 'react'
import DeliveryOptions from './delivery-options';
import CartitemDetails from './cartitem-Details';
import DeliveryDate from './delivery-date';

export default function OrderSummary({cart, delivery, loadCart }) {
  return (
    <div className="order-summary">
      {delivery.length > 0 && cart.map((cartItem) => {

        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate cartItem={cartItem} delivery={delivery} />

            <div className="cart-item-details-grid">
              <CartitemDetails cartItem={cartItem}/>

              <DeliveryOptions cartItem={cartItem} delivery={delivery} loadCart={loadCart} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
