import React from 'react'
import { getallfood } from '../../data/fooddata'
import Foodcard from '../Foodcard/Foodcard';
function AllFoodCard() {
    const foods = getallfood();
  return (
    <div className='container my-4'>
        <div className="allfoodheader d-flex justify-content-center align-items-center">
            <h1 className='text-uppercase fs-3 border-bottom pb-3 border-3 border-black'>our delicious food</h1>
        </div>
        <div className="foodlist py-5 d-flex justify-content-between align-items-center flex-wrap">
            
            {
                foods.map(food=>(<Foodcard key={food.id} food ={food}/>))
            }
            
           
        </div>
    </div>
  )
}

export default AllFoodCard