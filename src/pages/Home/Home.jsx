import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownoload from '../../components/AppDownload/AppDownoload'

const Home = () => {
const [category,setCategory]= useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownoload/>
    </div>
  )
}

export default Home
