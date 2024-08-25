import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/placeorder' element ={<PlaceOrder/>}/>
      </Routes>
    </div>
    
  )
}

export default App
