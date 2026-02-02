import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header'
// import { products } from '../../lib/products'
import './home.css'
import ProductGrid from './product-grid';
import { useSearchParams } from 'react-router';

export default function Home({ cart, loadCart }) {
  // fetch("http://localhost:3000/api/products") getting data from backend using fetch
  //   .then((response)=>{
  //     response.json().then((data)=>{
  //       data
  //     })
  //   })
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    }

    getHomeData();
  }, [search])

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
