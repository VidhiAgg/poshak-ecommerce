import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom';
import { AddressForm } from './AddressForm';
import "./adress.css"
const AddressPage = () => {
const navigate = useNavigate();
  const {loginData,addNewAddress, 
    editAddress,
    deleteAddress} = useContext(AuthContext);
    const [showAdd, setShowAddButton] = useState(false)
    const [editAdderessId, setEditAdressId] = useState(null);

const handleEditAddressClick = (address) =>{
 const updateAddPayoad = loginData?.userInfo?.userAddress.map(data => (
  data.id === editAdderessId ? 
     {...data,...address} : data
 ))
 editAddress(updateAddPayoad);
 setEditAdressId(null)
}

// const handleEditAddressClick = (updatedAddress) => {
//   const updatedAddresses = loginData?.userInfo?.userAddress.map((address) =>
//     address.id === updatedAddress.id ? updatedAddress : address
//   );
//   editAddress(updatedAddresses);
//   setEditAdressId(null);
// };


const handleCancelClick = () =>{
  setEditAdressId(null)
}


    const addressMapped =
    loginData?.userInfo?.userAddress &&
    loginData?.userInfo?.userAddress.length !== 0 ? (
      loginData?.userInfo?.userAddress.map((address) => (
        <div key={address.id} className="address-container">
        
          <div className="address-details">
             <b> {address.firstName} {address.lastName} </b>
              <br />
              {address.addressLine1}, {address.addressLine2}
              <br />
              {address.city}, {address.state}, {address.zipCode}
              <br />
              {address.country}
              <br />
             
              <b>{address.mobile}</b>
              <br/>
              <div>
                {editAdderessId === address.id ? (
                  <div>
                      <AddressForm onSubmit={handleEditAddressClick} address={address} />
              <button onClick={handleCancelClick} className="cancel-button">
                Cancel
              </button>
                    </div>
                ): 
                
              (<div className='button-main'>

<button onClick={() => setEditAdressId(address.id)}
                className="edit-buttn"
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteAddress(address.id)}
              >
                Remove
              </button>
                </div>
                )
              }
              </div>
            </div>
        </div>
      ))
    ) : (
      <h3>Please Add Address</h3>
    );
  return (
    <div className='address-page'>
      <div className='button-main'>
      <button onClick={()=> navigate(-1)}>Go Back </button>
      <button onClick={()=> setShowAddButton(!showAdd)}>{showAdd ?"Hide Add Address" :"Add New Address"}</button>
      </div>
      <div className='add-main--content'>
  
      <div className='addres-content'>
        {addressMapped}
      </div>
      <div className='add-new'>
        
        {showAdd &&  <AddressForm onSubmit={addNewAddress} />}
      </div>
      </div>
      
      
      
    </div>
  )
}

export default AddressPage