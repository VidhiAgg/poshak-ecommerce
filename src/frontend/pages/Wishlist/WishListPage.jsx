import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishlistContext/WishListContext'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import "./wishlist.css"
import WishListDisplay from './WishListDisplay';
const WishListPage = () => {
  const {wishlist} = useContext(WishListContext);
  const{loginData} = useContext(AuthContext);
  const navigate  = useNavigate();
  const wishListEmpty = wishlist?.length === 0 && (
    <>
    <img src=" /assets/add_to_cart.svg" width="250px" alt = "cart-empty"  onClick={()=> navigate("/products")}/>
    <h1>Hey, it feels so light</h1>
    <p>There is nothing in your List. Let's add some items.</p>
    </>
  )

  const wishListMapped = wishlist?.length!== 0 && (
    <>
{wishlist.map(item => 
<WishListDisplay {...item} key={item._id} />
  )}
    </>
  )

  return (
    <div className='wishlist-main'>

      <div className='wish-heading'>
      <h1>WishList</h1>
      </div>
      {wishListEmpty}
      <div className='wish-content'>
<div className='wish-items'>
    {wishListMapped}
   
</div>


    </div>
    </div>
  )
}


export default WishListPage