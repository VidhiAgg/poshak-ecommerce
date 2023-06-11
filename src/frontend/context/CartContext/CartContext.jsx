import React, { createContext, useState } from 'react'


export const CartListContext = createContext();
export const CartListContextProvider = ({children}) => {

  const [cartItems, setCartItem] = useState([]);
    const [disableCartBtn, setDisableCartBtn] = useState(false);
    const [order,setOrder] = useState()

  return  (
    <CartListContext.Provider value={{cartItems, setCartItem, disableCartBtn,setDisableCartBtn, order,setOrder}}>
        {children}
    </CartListContext.Provider>
  )
}

export default CartListContextProvider