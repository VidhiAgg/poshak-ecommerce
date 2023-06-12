import React, { useContext, useEffect, useState } from "react";
import CartSummary from "../cartPage/CartSummary";
import { CartListContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import "./checkout.css"

const CheckoutPage = () => {
  const { cartItems } = useContext(CartListContext);
  const { loginData } = useContext(AuthContext);
  const { selectedAdress, setSelectedAddress } = useState();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   setSelectedAddress(loginData?.userInfo?.userAddress[0]
  //   )
  // },[])
  const cartEmpty = cartItems?.length === 0 && (
    <>
      <img
        src=" /assets/add_to_cart.svg"
        alt="cart-empty"
        onClick={() => navigate("/products")}
      />
      <h1>Hey, it feels so light</h1>
      <p>There is nothing in your bag. Let's add some items.</p>
    </>
  );
  const handleAddressSelection = (address) => {
    // setSelectedAddress(address);
  };

  const addressMapped =
    loginData?.userInfo?.userAddress &&
    loginData?.userInfo?.userAddress.length !== 0 ? (
      loginData?.userInfo?.userAddress.map((address) => (
        <div key={address.id} className="address-container">
          <div>
          <label>
            <input
              type="radio"
              name="address"
              required
              onChange={() => handleAddressSelection(address)}
            />
          </label>
          </div>
        
          <div className="address-details">
             <b> {address.firstName} {address.lastName} </b>
              <br />
              {address.addressLine1}, {address.addressLine2}
              <br />
              {address.city}, {address.state}, {address.zipCode}
              <br />
              {address.country}
              <br />
              <br />
              <b>{address.mobile}</b>
            </div>
        </div>
      ))
    ) : (
      <h3>Please Add Address</h3>
    );

  const cartSummary = cartItems?.length !== 0 && <>{<CartSummary />}</>;

  return (
    <div className="checkut">
      <div className="checkut-content">
        <div className="checkut-items">
          {cartEmpty}
          <div>
<h2>Select Address *</h2>
{addressMapped}
<button onClick={()=>navigate("/address")} >CHANGE OR ADD ADDRESS</button>
          </div>
          
        </div>

        {cartSummary}
      </div>
    </div>
  );
};

export default CheckoutPage;
