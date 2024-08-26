import React from 'react'
import './CardDetails.css'
import { getimgUrl } from '../../utils/foodutils'
function CardDetails({selectedfood,onClose}) {
  return (
    <div className='cardDetails'>
        <div className="detailscontent p-5">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column gap-3">
                <h4>{selectedfood.name}</h4>
                <p>{selectedfood.description}</p>
                <h5>Price: {selectedfood.price}</h5>
                <div className="actionbtn">
                  <div className="row">
                    <div className="col-lg-6">
                      <button className='w-100 btn btn-primary'>Add to Cart</button>
                    </div>
                    <div className="col-lg-6">
                      <button onClick={onClose} className='w-100 btn btn-danger'>Cancel</button>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img src={getimgUrl(selectedfood.cover)} style={{width:"300px",height:"300px"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetails