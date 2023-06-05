import React, { createContext, useEffect, useState } from 'react'

export const APIContext = createContext();

export const APIContextProvider = ({children}) => {
  const[products,setProducts] = useState();
  const[categories,setCategories] = useState();

    const fetchProducts = async ()=>{
        try {
            const response = await fetch("/api/products");
            if(response.status === 200){
                const {products} = await response.json()
                setProducts(products);
                console.log(products)
            }
            
        } catch (error) {
            console.log(error)
        }
     
    }

    const fetchCategories = async () =>{
        try{
            const response = await fetch("/api/categories");
  
            if(response.status === 200){
                const {categories} = await response.json()
                setCategories(categories)
            }
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchCategories();
        fetchProducts();

    },[])
  return (
    <APIContext.Provider value={{products,categories}} >
        {children}
    </APIContext.Provider>
  )
}
