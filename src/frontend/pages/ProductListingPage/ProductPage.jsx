import React, { useContext, useState } from 'react'
import styles from "./productPage.module.css"

import FilterPanel from './FilterPanel'

import ProductList from './ProductList';
import { ProductListContext } from '../../context/ProductListingContext/ProductListContext';
// import { APIContext } from '../../context/APIContext';

export const ProductPage = () => {
  
const [toggeFilter, setToggleFiter] = useState(false);
 const {filteredProducts} = useContext(ProductListContext);
//  const{products} = useContext(APIContext)
const productMapped = filteredProducts?.map(data=>
  // <div className={styles['product-container']} key={data.id}>
  //   <img src={data.image_url} />
  //   <p>
  //     Name : {data.name}
  //   </p>
  //   <p>Description:{data.description}</p>
  // </div>
  <ProductList {...data} key={data.id}/>
  )

  return (
<>
<div className={styles['product-top-container']}>
    <h1>Showing All Latest Collection
    <span className={styles['product-count']}>{`(Showing ${filteredProducts?.length ??  0} products) `}</span>
    </h1>

    <div className={styles['product-filter-container']}>
      <button className={styles['show-filter-button']} onClick={()=> setToggleFiter(!toggeFilter)} > Show Filters
      <i className="material-icons">filter_alt</i>
      </button>
      {toggeFilter && <FilterPanel/>}
      </div>

    </div>
    
    <div className={styles['product-conatiner-layout']}>
   
     <div className={styles['product-desktop-container']}>
     <FilterPanel/>
     </div>
   
    <div className={styles['productPanel']} >
    {productMapped}
    </div>
      
     
    </div>
  
</>
    
   
  )
}
