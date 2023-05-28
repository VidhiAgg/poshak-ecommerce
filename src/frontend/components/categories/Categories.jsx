import React from 'react';
import './categories.css'
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div className='category'>
       <h1>Categories</h1>
    <div className='layout'>

        <div className="men-category-card">

          <p>Men Collection
          <i className="material-icons">navigate_next</i>
          </p>
  
       
      
        </div>
        <div className="women-category-card">
          <Link className='category-link'>
         
          <p>Women Collection
          <i className="material-icons">navigate_next</i>
          </p>
          </Link>
       

   
            </div>
            <div className="child-category-card">
            <Link>
          <i className="material-icons">navigate_next</i>
          <p>Kids Collection</p>
          </Link>
       
      
            </div>
    </div>
    
    </div>
  )
}

export default Categories