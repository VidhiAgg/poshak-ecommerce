import React, { createContext, useState } from 'react'


export const WishListContext = createContext();
export const WishListContextProvider = ({children}) => {
    const [wishlist, setWishList] = useState([]);
    const [disableWishBtn, setDisableWishBtn] = useState(false);



  return  (
    <WishListContext.Provider value={{wishlist, setWishList,disableWishBtn,setDisableWishBtn}}>
        {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider