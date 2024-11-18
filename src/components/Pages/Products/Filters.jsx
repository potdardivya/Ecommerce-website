import React, { useState } from 'react';
import './Product.css';

export default function Filters({ products, filterChange }) {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  
  const uniqueCategorySet = [...new Set(products.map((product) => product.category))];
  const uniquePriceSet = ['0-20', '20-40', '40-60', '60-80', '80-100'];

  const handleFilters = () => {
    let productData = products;
    
    if (categoryFilter) {
      productData = productData.filter(item => categoryFilter === item.category);
    }
    
    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(Number);
      productData = productData.filter((item) => item.price >= min && item.price <= max);
    }
    filterChange(productData);
  };

  return (
    <div className="filters-container">
      
      <div className="filter-group">
        <p className="filter-label">Categories</p>
        <select className="filter-dropdown" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All</option>
          {uniqueCategorySet.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <p className="filter-label">Categories</p>
        <select className="filter-dropdown" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All</option>
          {uniqueCategorySet.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div><div className="filter-group">
        <p className="filter-label">Categories</p>
        <select className="filter-dropdown" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All</option>
          {uniqueCategorySet.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <p className="filter-label">Price</p>
        <select className="filter-dropdown" onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">All</option>
          {uniquePriceSet.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      
      <button className="apply-filters-button" onClick={handleFilters}>Apply Filters</button>
    </div>
  );
}
