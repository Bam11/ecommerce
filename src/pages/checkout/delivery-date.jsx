import React from 'react'
import dayjs from 'dayjs'

export default function DeliveryDate({ cartItem, delivery }) {
  const selectedDelivery = delivery
    .find((deliveryOption) => {
      return deliveryOption.id === cartItem.deliveryOptionId;
    })
  return (
    <div className="delivery-date">
      Delivery date: {dayjs(selectedDelivery.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
    </div>
  )
}
