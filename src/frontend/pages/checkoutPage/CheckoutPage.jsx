import React, { useContext } from 'react'
import CartSummary from '../cartPage/CartSummary'
import { CartListContext } from '../../context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';


const CheckoutPage = () => {
  const {cartItems} = useContext(CartListContext);
  const navigate  = useNavigate();

  const cartEmpty = cartItems?.length === 0 && (
    <>
    <img src=" /assets/add_to_cart.svg" alt = "cart-empty"  onClick={()=> navigate("/products")}/>
    <h1>Hey, it feels so light</h1>
    <p>There is nothing in your bag. Let's add some items.</p>
    </>
  )

  const cartSummary = cartItems?.length !== 0 && (
    <>
    {
      <CartSummary />
     }
    </>
  )

  return (
    <div className='cart'>
     
      <div className='cart-content'>
<div className='cart-items'>
{cartEmpty}
</div>

{cartSummary}
    </div>
    </div>
  )
}

export default CheckoutPage