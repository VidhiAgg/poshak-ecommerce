import React from 'react'
import './HomePage.css'

import { useNavigate } from 'react-router-dom'
import Categories from '../../components/categories/Categories';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-header-container">
      {/* <img className="homePage-img1" 
      alt="homeimg" src="https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg" ></img> */}
<img onClick = {()=>navigate("/products")} className="homePage-img2" alt="homeimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" ></img>
<h1 className='header-h1'>Explore the wide range of products</h1>
<button onClick = {()=>navigate("/products")} className='header-button'>Explore</button>
      </div>
<Categories/>

     </>
  )
}

export default HomePage

