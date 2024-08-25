import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header container'>
        <div className="header-contents">
            <h4 className='text-uppercase fs-2 fw-bold mb-2'>order your favourite food here..</h4>
            <p className='py-2 w-50'>Our food is very delicius.you can buy it very cost price.you can choose your daily food</p>
            <button className='viewbtn'>view more</button>
        </div>
    </div>
  )
}

export default Header