import React from 'react'
import star from '../assets/star.jpg'
function Rating({value}) {
    const stars = Array(value).fill(star)
  return (
    <>
        {
            stars.map((star,index)=>(
                <img key={index} src={star} alt="" style={{width:"15px",height:"15px"}} />
            ))
        }
        
    </>
  )
}

export default Rating