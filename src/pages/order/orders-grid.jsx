import React from 'react'
import OrderHeader from './order-header'
import OrderDetailsGrid from './order-details-grid'

export default function OrdersGrid({ orders}) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div className="order-container" key={order.id}>
            <OrderHeader order={order} />

            <OrderDetailsGrid order={order}/>
          </div>
        )
      })}
    </div>
  )
}
