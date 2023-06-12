import React, { useContext } from "react";
import "./cartSummary.css";
import { CartListContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { ProjectUtils as Constants } from "../../utils/ProjectUtils";
const CartSummary = ({cartOrCheckouPage}) => {

  const {cartItems,setCartItem,
    order,setOrder} = useContext(CartListContext);
  const navigate  = useNavigate();
  const totalQuantity = cartItems?.reduce((total,{qty})=> total + qty,0)
  const totalPrice = cartItems?.reduce((total,{orignalPrice,qty})=> total+ (parseInt(orignalPrice)*qty) ,0);
  const totalPayPrice = cartItems?.reduce((total,item)=>total + item.price * item.qty, 0)
const totalAmount = totalPayPrice + parseInt(Constants._DELIVERY_CHARGES);
const discount = totalPrice - totalPayPrice
  const handleButtonClick = ()=>{
if(cartOrCheckouPage === "cart"){
  navigate("/checkout")
}else{
  // placeAnOrder(cartItems,setCartItem,order, setOrder);
}
}
  return (
    <div className="cart-summary">
      <div className="price-heading">
        <h2>Price Details</h2>
      </div>
      <div className="line-break">
        <hr />
      </div>

      <div className="price-content">
        <span>
          <b>Price: </b>
        </span>
        <span>({totalQuantity} items)</span>
        
        <span>Rs.{totalPrice} </span>
        
      </div>
<div className="item-list">
<ul>
         {
          cartItems.map(({name,qty,_id, price,orignalPrice})=>
              <li key={_id}> <span className="name"><b>{name}</b>- ({qty})</span> 
              <span></span>   
              <span>₹{price} <span className="orignal-price">₹{orignalPrice}</span></span>
              </li>
          )
         }
        </ul>
</div>
      <div className="discount-content">
        <span>
          <b>Discount: </b>
        </span>

        <span>Rs.{discount} </span>
      </div>

      <div className="deleiver-charges-content">
        <span>
          <b>Deliver chanrges: </b>
        </span>

        <span>Rs.{parseInt(Constants._DELIVERY_CHARGES)}</span>
      </div>

      <div className="total-amount">
        <span>
          <b>Total Amount: </b>
        </span>

        <span>Rs.{totalAmount} </span>
      </div>
      <p className="discount-statemnt">You will save {discount} on this order.</p>
      <button className="checkout-btn" onClick={handleButtonClick}>{cartOrCheckouPage === "cart" ? "CheckOut" : "Place an order"}</button>
    </div>
  );
};

export default CartSummary;
