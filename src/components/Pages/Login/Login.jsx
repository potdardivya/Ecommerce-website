// src/components/Pages/LoginRegister/LoginRegister.js
import React, { useState } from 'react';
import './Login.css';

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true); // Initially set to true for login

  // States for login and registration form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handlers for form data changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit handlers for login and registration
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    alert('Login successful!');
    setLoginData({
      email: '',
      password: '',
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registration submitted:', registerData);
    alert('Registration successful!');
    setRegisterData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setIsLogin(true); // Switch to login view after successful registration
  };

  return (
    <div className="login-register-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Login</button>
            <p className="toggle-text">
              Don’t have an account?{' '}
              <span onClick={() => setIsLogin(false)} className="toggle-link">
                Register here
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={registerData.name}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Register</button>
            <p className="toggle-text">
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)} className="toggle-link">
                Login here
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
