// src/components/Pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import './Product.css';
import Filters from './Filters';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([])

  // Fetching the product data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {setProducts(data); setFilters(data)})
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  const handleFilterChange = (filteredData) =>{
    console.log(filteredData)

    setFilters(filteredData)

  }
  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <Filters products={products} filterChange = {handleFilterChange}/>
      {filters.length === 0? (<p>no match</p>):(
      <div className="product-grid">
        
        {filters.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 100)}...</p>
            <p className="price">${product.price.toFixed(2)}</p>
            
            {/* Displaying Rating */}
            <div className="rating">
              <span>Rating: {product.rating.rate} ⭐</span>
              <span>({product.rating.count} reviews)</span>
            </div>

            <button>Add to Cart</button>

          </div>
        ))}
      </div>
      ) }
    </div>
  );
}
