import React, { createContext, useContext } from 'react'
import { ProductListContext } from '../../context/ProductListingContext/ProductListContext';
import {ProjectUtils as Constants} from '../../utils/ProjectUtils'
export const HandleFilterClickContext = createContext();

export const HandleFilterClickProvider = ({children}) => {

    const {productsDispatch} = useContext(ProductListContext);

const handleSearchFilter = (event)=>{
    productsDispatch({type: Constants._SEARCH_FILTER_, payload:event.target.value})
}
const handlePriceRange =(event)=>{
    productsDispatch({type: Constants._PRICE_RANGE_FILTER_, payload:event.target.value})

}

const handleCheckBoxInput = (event)=>{
    // console.log(event)
    productsDispatch({type: Constants._CATEGORIES_, payload:event.target.value})

}

const handleRatingInput = (event) =>{
    productsDispatch({type: Constants._RATINGS_, payload:event.target.value})

}

const handlePriceSortInput = (event) =>{
    if(event.target.value === Constants._HIGH_)
    {
    productsDispatch({type: Constants._HIGH_})

    } else{
        productsDispatch({type:Constants._LOW_})
    }
}

const handleClearButton = (event)=>
{
    productsDispatch(({type: Constants._CLEAR_FILTER_, 
        payload:event.target.value}))
}

  return (
   <HandleFilterClickContext.Provider value= {{handlePriceRange, 
   handleCheckBoxInput, handleRatingInput,handleSearchFilter, handlePriceSortInput, handleClearButton}} >
    {children}
   </HandleFilterClickContext.Provider>
  )
}
