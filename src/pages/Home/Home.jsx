import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import AllFoodCard from '../../components/AllFoodCard/AllFoodCard'
function Home() {
  return (
    <div>
      <Header/>
      <AllFoodCard/>
    </div>
  )
}

export default Home