import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { FoodContext } from './context'


function App() {
  const [cartValue,setCartValue] = useState([]);
  return (
    <div >
      <FoodContext.Provider value={{cartValue,setCartValue}}>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/placeorder' element ={<PlaceOrder/>}/>
      </Routes>
      </FoodContext.Provider>
    </div>
    
  )
}

export default App
