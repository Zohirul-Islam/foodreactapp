import React, { useState } from 'react'
import { getimgUrl } from '../../utils/foodutils'
import './Foodcard.css'
import Rating from '../Rating';
import CardDetails from '../CardDetails/CardDetails'

function Foodcard({food}) {
  const [showCart,setShowCart] =useState(false);
  const [selectedfood,setSelectedfood] = useState(null)
  function handleSelectedfood (food){
    setShowCart(true)
    setSelectedfood(food);
  }
  function handleClose (){
    setSelectedfood(null)
    setShowCart(false)
  }
  return (
    <>
    {showCart && <CardDetails selectedfood ={selectedfood} onClose ={handleClose}/>}
    <div className='card'>
      <a onClick={()=>handleSelectedfood(food)}>
        <img src={getimgUrl(food.cover)}  />
        <div className="card-body">
            <p>{food.name}</p>
            <div>
                <Rating value ={food.rating}/>
            </div>
            <p>{food.price}</p>
        </div>
        <div className="card-btn">
            <a className='btn btn bg-primary d-block text-white' href="">Add To Cart</a>
        </div>
        </a>
    </div>
    </>
  )
}

export default Foodcard