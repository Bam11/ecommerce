import React from 'react'
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export default function DeliveryOptions({ delivery, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {delivery.map((delivery) => {
        let price = "FREE Shipping";

        if (delivery > 0) {
          price = `${formatMoney(delivery.priceCents)} - Shipping`;
        }

        return (
          <div key={delivery.id} className="delivery-option">
            <input type="radio"
              checked={delivery.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`} />
            <div>
              <div className="delivery-option-date">
                {dayjs(delivery.estimatedDeliveryTimeMs).format("dddd, MMMMM D")}
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
