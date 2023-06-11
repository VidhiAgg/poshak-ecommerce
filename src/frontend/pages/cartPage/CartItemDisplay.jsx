import React, { useContext } from 'react'
import "./cartDisplay.css"
import { CartListContext } from '../../context/CartContext/CartContext';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { updateQuantityOfItemsInCart, removeItemFromCart } from '../../Service/cartlist';
import { WishListContext } from '../../context/WishlistContext/WishListContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addItemToWish } from '../../Service/wishlist';
import debounce from "lodash/debounce";
const CartItemDisplay = (items) => {
    
    const {_id, name, description, price, image_url,qty,orignalPrice } = items;
    const {loginData} = useContext(AuthContext);
const {setCartItem, disableCartBtn,setDisableCartBtn} = useContext(CartListContext);
const {wishlist, setWishList,disableWishBtn,setDisableWishBtn} = useContext(WishListContext);

const navigate = useNavigate();

const isItemInWishList = (productID) => wishlist.find(({_id})=> _id === productID)

const handleIncrementClick = debounce((productID, action)=> {
    updateQuantityOfItemsInCart(setCartItem,productID, action,loginData.token);
}, 300)

const handleDecClick = debounce((productID, action, quantity)=>{
    if(quantity > 1){
        updateQuantityOfItemsInCart(setCartItem,productID, action,loginData.token);
    }else{
        removeItemFromCart(productID,loginData.token,setCartItem,setDisableCartBtn);
    }
}, 300)

const handleDeleteFromCart =(productID) =>{
    removeItemFromCart(productID,loginData.token,setCartItem, setDisableCartBtn)
}

const handleWishListAddButton = (productID) =>{
    if(!isItemInWishList(productID)){
        addItemToWish(items,loginData.token,setWishList,setDisableWishBtn)
    }else{
        toast.error("Already added in Wishlist.");
        navigate("/wishlist")
    }
}


  return (
    <div className='cart-item-display'>
        <div className='cart-image-container'>
<img className='cart-image' src = {image_url} alt = "item"/>
        </div>
        <div className='cart-content'>
            <div className="cart-title">
            <h2>
             {name}
            </h2>
            <p>{description}</p>
           

            <div className='card-price'>
            <span className='current-price'>₹ {price}</span>
            <span className='orignal-price'>₹ {orignalPrice}</span>
            </div>

            <div className="card-quantity">
                
            <button 
            className="decrement" onClick={()=>handleDecClick(_id,"decrement", qty)}>
                    -
                    </button>
                    <span>{qty}</span>
                
                <button  className="increment" onClick={()=>handleIncrementClick(_id,"increment")}>
                    +
                </button>

            </div>
            <div className="action-btn">
                <button className="wishlist-btn" disabled={disableWishBtn}
                onClick={()=>handleWishListAddButton(_id)}
                >
                    {isItemInWishList(_id) ? "Already in Wishlist" : "Move to Wishlist"}</button>
                <button className="cart-btn" 
                disabled={disableCartBtn}
                onClick={()=>handleDeleteFromCart(_id)}>Remove from Cart</button>

            </div>

            </div>
        </div>
    </div>
  )
}

export default CartItemDisplay