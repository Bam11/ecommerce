import React from 'react'
import Header from '../components/header'

export default function ErrorPage({ cart}) {
  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center">
      <title>E-Commerce</title>
      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

      <Header cart={cart}/>

      <h2 className="text-white text-4xl">
        Page Not Found!!!
      </h2>
    </div>
  )
}
