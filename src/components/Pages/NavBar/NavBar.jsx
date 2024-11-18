import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  return (
    <nav>
    <div>
      <h1>Handmade Bags</h1>
      </div>
      <ul>
       <li><Link to="/">Home</Link></li> 
       <li><Link to="/about">About US</Link></li>
       <li><Link to ="/product">Products</Link></li>
       <li><Link to ="/contact">Contact</Link></li>
       <li><Link to ="/login">Login/Register</Link></li>
      </ul>
    
    </nav>
  )
}
