import React from 'react'
import { getimgUrl } from '../../utils/foodutils'
import './Foodcard.css'

import Rating from '../Rating';

function Foodcard({food}) {
  return (
    <div className='card'>
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
    </div>
  )
}

export default Foodcard