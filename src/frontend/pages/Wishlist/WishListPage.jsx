import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishlistContext/WishListContext'
import { AuthContext } from '../../context/AuthContext/AuthContext';

const WishListPage = () => {
  const {wishlist} = useContext(WishListContext);
  const{loginData} = useContext(AuthContext);
  
  return (
    <div className='wishlist-main'>


    </div>
  )
}

export default WishListPage