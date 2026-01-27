import axios from 'axios';
import React from 'react'
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export default function DeliveryOptions({ delivery, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:   
      </div>
      {delivery.map((delivery) => {
        let price = "FREE Shipping";

        if (delivery.priceCents > 0) {
          price = `${formatMoney(delivery.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: delivery.id
          })
          await loadCart();
        };

        return (
          <div key={delivery.id} className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input type="radio"
              checked={delivery.id === cartItem.deliveryOptionId}
              onChange={() =>{}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`} />
            <div>
              <div className="delivery-option-date">
                {dayjs(delivery.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">
                {price}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
