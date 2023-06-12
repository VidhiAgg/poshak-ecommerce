import React, { useContext } from 'react'
import styles from "./productPage.module.css"
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import { CartListContext } from '../../context/CartContext/CartContext'
import { WishListContext } from '../../context/WishlistContext/WishListContext'
import { addItemToWish,removeItemFromWishlist } from '../../Service/wishlist';
import { addItemToCart,removeItemFromCart } from '../../Service/cartlist';


const ProductList = (data) => {
  const {loginData} = useContext(AuthContext);
  const navigate = useNavigate();
  const {cartItems, 
    setCartItem, 
    disableCartBtn,
    setDisableCartBtn} = useContext(CartListContext);
  const {wishlist, 
    setWishList, 
    disableWishBtn,
    setDisableWishBtn} = useContext(WishListContext);


  return (
<div className={styles['product-container']} key={data._id}>
    <div className={styles['product-detail']} onClick={()=> navigate("/products/"+data._id)}
>

    <img src={data.image_url}  alt="home-page"/>
    <b >{data.name}
    </b>
    <p className={styles['product-desc']}>{data.description}</p>
    <p><b>₹{data.price}</b></p>
<p className={styles['product-rating']}>{data.rating} star</p>


  </div>
<div className={styles['product-detail-btn']}>
 
<button className={styles['wishlist-btn']}
    disabled={disableWishBtn}

    onClick={()=>{
      if(loginData.isLoggedIn){
        wishlist?.find(({_id: selectedId})=> selectedId === data._id) ?
        removeItemFromWishlist(data._id, loginData.token,setWishList,setDisableWishBtn):
        addItemToWish(data,loginData.token,setWishList,setDisableWishBtn)
        

      }else{
        navigate("/login")
      }

    }}>
    {wishlist?.find(({_id: selectedId})=> selectedId === data._id) ? "Remove From list"
    :
    "Add to WishList"}</button>
    <button className={styles['cart-btn']}disabled={disableCartBtn}
    onClick={()=>{
      if(loginData.isLoggedIn){
        cartItems?.find(({_id: selectedId})=> selectedId === data._id )?
        removeItemFromCart(data._id, loginData.token,setCartItem,setDisableCartBtn):
        addItemToCart(data,loginData.token,setCartItem,setDisableCartBtn)
        

      }else{
        navigate("/login")
      }

    }}>
    {cartItems?.find(({_id: selectedId})=> selectedId === data._id) ? "Remove From Cart"
    :
    "Add to Cart"}</button>
</div>

</div>
  )
}

export default ProductList