import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavBar from './components/Pages/NavBar/NavBar';
import Home from './components/Pages/Home/Home'
import AboutUs from './components/Pages/AboutUs/AboutUs'
import Products from './components/Pages/Products/Products'
import Contact from './components/Pages/Contact/Contact'
import Login from './components/Pages/Login/Login'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ='/about' element={<AboutUs/>}/>
          <Route path ='/product' element={<Products/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/login' element={<Login/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
