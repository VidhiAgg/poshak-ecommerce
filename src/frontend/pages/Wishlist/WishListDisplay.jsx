
import React, { useContext } from 'react'
import "./wishlist.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { WishListContext } from '../../context/WishlistContext/WishListContext';
import { CartListContext } from '../../context/CartContext/CartContext';
import { removeItemFromWishlist } from '../../Service/wishlist';
import { addItemToCart } from '../../Service/cartlist';

const WishListDisplay = (item) => {

    const {_id, name, description, price, image_url,orignalPrice } = item;
    const {loginData} = useContext(AuthContext);
    const {setWishList,disableWishBtn,setDisableWishBtn} = useContext(WishListContext);
    const {cartItems, setCartItem, disableCartBtn,setDisableCartBtn} = useContext(CartListContext);

    const navigate = useNavigate();

    const isItemInCartList = (productID) => cartItems.find(({_id})=> _id === productID)

    const handleDeleteFromWish =(productID) =>{
        removeItemFromWishlist(productID,loginData.token,setWishList, setDisableWishBtn)
    }
    
    const handleCartButtonClick = (productID) =>{
        if(!isItemInCartList(productID)){
            addItemToCart(item,loginData.token,setCartItem,setDisableCartBtn)
        }else{
            toast.error("Already added in Wishlist.");
            navigate("/wishlist")
        }
    }
  return (
    <div className='wish-item-display' >
                <div className='wish-image-container'>
<img className='wish-image' src = {image_url} alt = "item"/>
    </div>

        <div className='wish-content'>
            <div className="wish-title">
            <h2>
             {name}
            </h2>
            <p>{description}</p>

            <div className='card-price'>
            <span className='current-price'>₹ {price}</span>
            <span className='orignal-price'>₹ {orignalPrice}</span>
            </div>
    </div>
    <div className="action-btn">
        <button className="wishlist-btn" disabled={disableWishBtn}
                onClick={()=>handleCartButtonClick(_id)}
                >
                    {isItemInCartList(_id) ? "Go to Cart" : "Move to Bag"}</button>
                <button className="cart-btn" 
                disabled={disableCartBtn}
                onClick={()=>handleDeleteFromWish(_id)}>Remove from Wishlist</button>

            </div>
    </div>
    </div>
  )
}

export default WishListDisplay