import React, { createContext, useEffect, useState } from 'react'

export const APIContext = createContext();

export const APIContextProvider = ({children}) => {
  const[products,setProducts] = useState();
  const[isLoading,setIsLoading] = useState(false);
  const[categories,setCategories] = useState();
   async function getProductDetail(productID, setProduct, 
    setLoader){
        setLoader(true)
        try {
            const response = await fetch("/api/products/"+productID);
            const {product} = await response.json()
            // console.log(await (response.json()))
            if(response.status === 200){
                setProduct(product);
               
            }
            
        } catch (error) {
            
        }finally{
            setLoader(false)
        }

}
    const fetchProducts = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch("/api/products");
            if(response.status === 200){
                const {products} = await response.json();
                setProducts(products);

            }
            
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
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
    <APIContext.Provider value={{isLoading,products,categories, getProductDetail}} >
        {children}
    </APIContext.Provider>
  )
}
