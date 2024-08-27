import React, { useContext, useState } from 'react'
import { getimgUrl } from '../../utils/foodutils'
import './Foodcard.css'
import Rating from '../Rating';
import CardDetails from '../CardDetails/CardDetails';
import { FoodContext } from '../../context';

function Foodcard({food}) {
  const {cartValue,setCartValue} = useContext(FoodContext);
  const [showCart,setShowCart] =useState(false);
  const [selectedfood,setSelectedfood] = useState(null);
  
  
  function handleSelectedfood (food){
    setShowCart(true)
    setSelectedfood(food);
  }
  function handleClose (){
    setSelectedfood(null)
    setShowCart(false)
  }
  function handleAddToCart (e,food){
    e.preventDefault();
    e.stopPropagation();
    const found = cartValue.find(item=>item.id === food.id);
    if(!found){
      setCartValue([...cartValue,food])
    }
    
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
            <a onClick={(e)=>handleAddToCart(e,food)} className='btn btn bg-primary d-block text-white' href="">Add To Cart</a>
        </div>
        </a>
    </div>
    </>
  )
}

export default Foodcard