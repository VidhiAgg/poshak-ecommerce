import React, { useContext } from 'react'
import { CartListContext } from '../../context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItemDisplay from './CartItemDisplay';
import CartSummary from './CartSummary';
import "./cartpage.css"

const CartPage = () => {

  const {cartItems} = useContext(CartListContext);
  const navigate  = useNavigate();
  const cartEmpty = cartItems?.length === 0 && (
    <>
    <img src=" /assets/add_to_cart.svg" width="250px" alt = "cart-empty"  onClick={()=> navigate("/products")}/>
    <h1>Hey, it feels so light</h1>
    <p>There is nothing in your bag. Let's add some items.</p>
    </>
  )

  const cartItemsMapped = cartItems?.length !== 0 && (
    <>
    {
      cartItems.map(items => 
        <CartItemDisplay {...items} key={items._id} />
        )
}
    </>
  )

  const cartSummary = cartItems?.length !== 0 && (
    <>
    {
      <CartSummary cartOrCheckouPage={"cart"} />
     }
    </>
  )

  return (
    <div className='cart'>
      <div className='cart-heading'>
      <h1>CartItems</h1>
      </div>
      
      <div className='cart-content'>
<div className='cart-items'>
    {cartEmpty}
    {cartItemsMapped}
</div>

{cartSummary}
    </div>
    </div>
  )
}

export default CartPage