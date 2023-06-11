import React, { useContext, useEffect, useState } from 'react'

import styles from "./productPage.module.css"
import { APIContext } from '../../context/APIContext'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate, useParams } from 'react-router-dom'
import { CartListContext } from '../../context/CartContext/CartContext'
import { WishListContext } from '../../context/WishlistContext/WishListContext'
import { addItemToWish,removeItemFromWishlist } from '../../Service/wishlist';
import { addItemToCart,removeItemFromCart } from '../../Service/cartlist';

const ProductDetailPage= () => {
    const navigate = useNavigate();
  const {cartItems, setCartItems, disableCartBtn,setDisableCartBtn} = useContext(CartListContext);
  const {wishlist, setWishList, disableWishBtn, setDisableWishBtn} = useContext(WishListContext);
  const {getProductDetail} = useContext(APIContext)
  const [product, setProduct] = useState({});
  const{loginData} = useContext(AuthContext)
  const [loader, setLoader] = useState(false);
  const { productId } = useParams();

useEffect(()=>{
getProductDetail(productId,setProduct,setLoader)
},[])

  return (
    <div>
{loader && <h1>Loading</h1>}

    <div className={styles['product-container']} key={product._id}>

    <img src={product?.image_url}  alt="home-page"/>
    <b >{product.name}
    </b>
    <p className={styles['product-desc']}>{product.description}</p>
    <p><b>₹{product.price}</b></p>
<p className={styles['product-rating']}>{product.rating} star</p>

    <button className={styles['wishlist-btn']}
    disabled={disableWishBtn}
    onClick={()=>{
      if(loginData.isLoggedIn){
        wishlist?.find(({_id: selectedId})=> selectedId === product._id ?
        removeItemFromWishlist(product._id, loginData.token,setWishList,setDisableWishBtn):
        addItemToWish(product,loginData.token,setWishList,setDisableWishBtn)
        )

      }else{
        navigate("/login")
      }

    }}>
    {wishlist?.find(({_id: selectedId})=> selectedId === product._id) ? "Remove From list"
    :
    "Add to WishList"}</button>
    <button className={styles['cart-btn']}disabled={disableCartBtn}
    onClick={()=>{
      if(loginData.isLoggedIn){
        cartItems?.find(({_id: selectedId})=> selectedId === product._id ?
        removeItemFromCart(product._id, loginData.token,setCartItems,setDisableCartBtn):
        addItemToCart(product,loginData.token,setCartItems,setDisableCartBtn)
        )

      }else{
        navigate("/login")
      }

    }}>
    {cartItems?.find(({_id: selectedId})=> selectedId === product._id) ? "Remove From Cart"
    :
    "Add to Cart"}</button>
  </div>
    </div>
  )
}

export default ProductDetailPage
