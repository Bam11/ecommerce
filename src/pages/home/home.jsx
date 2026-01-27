import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header'
// import { products } from '../../lib/products'
import './home.css'
import ProductGrid from './product-grid';

export default function Home({ cart, loadCart }) {
  // fetch("http://localhost:3000/api/products") getting data from backend using fetch
  //   .then((response)=>{
  //     response.json().then((data)=>{
  //       data
  //     })
  //   })
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }

    getHomeData();
  }, [])

  return (
    <div>
      <title>E-Commerce</title>
      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  )
}
