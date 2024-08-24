import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
    <a className="navbar-brand" href="#">ReactFoodApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mobile App</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
    <div className="menuicon">
        <ul>
            <li ><FaSearch  className='icon'/></li>
            <li ><FaCartPlus className='icon' /></li>
            <li ><button className='btn btn-outline-primary' >Sign In</button></li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar