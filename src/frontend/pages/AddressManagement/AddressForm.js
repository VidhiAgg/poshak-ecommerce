import { useState } from "react"
import "./adress.css"

export const AddressForm = ({ onSubmit, address }) => {
    const defaultValue = {
        // firstName: "",
        // lastName: "",
        // addressLine1: "",
        // addressLine2: "",
        // city: "",
        // state: "",
        // zipCode: "",
        // mobile: ""
        firstName: address?.firstName || "",
        lastName: address?.lastName || "",
        addressLine1: address?.addressLine1 || "",
        addressLine2: address?.addressLine2 || "",
        city: address?.city || "",
        state: address?.state || "",
        zipCode: address?.zipCode || "",
        country: address?.country || "",
        mobile: address?.mobile || ""
      };
  const [addressField, setAddressField] = useState(defaultValue);

  const onAddressEditHandler = (event, field) => {
    setAddressField({ ...addressField, [field]: event.target.value });
  };

  const onSubmitHandler = (event)=>{
    event.preventDefault();

 

    onSubmit(addressField); 

    setAddressField({
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        mobile:""
      });
  }

  const clearField = ()=> setAddressField({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile:""
  });

  return (
    <form
      className="address-form"
      onSubmit={
        onSubmitHandler
      }
    >
      <input
        required
        value={addressField.firstName}
        type="text"
        placeholder="Enter First Name"
        onChange={(event) => {
          onAddressEditHandler(event, "firstName");
        }}
      />

      <input
        required
        value={addressField.lastName}
        type="text"
        placeholder="Enter Last Name"
        onChange={(event) => {
          onAddressEditHandler(event, "lastName");
        }}
      />
      <input
        required
        value={addressField.addressLine1}
        type="text"
        placeholder="Enter Address Line 1"
        onChange={(event) => {
          onAddressEditHandler(event, "addressLine1");
        }}
      />

      <input
        required
        value={addressField.addressLine2}
        type="text"
        placeholder="Enter Address lin 2"
        onChange={(event) => {
          onAddressEditHandler(event, "addressLine2");
        }}
      />
      <input
        required
        value={addressField.city}
        type="text"
        placeholder="Enter City"
        onChange={(event) => {
          onAddressEditHandler(event, "city");
        }}
      />
      <input
        required
        value={addressField.state}
        type="text"
        placeholder="Enter State"
        onChange={(event) => {
          onAddressEditHandler(event, "state");
        }}
      />
      <input
        required
        value={addressField.zipCode}
        type="text"
        placeholder="Enter Pincode"
        maxLength={6}
        onChange={(event) => {
          onAddressEditHandler(event, "zipCode");
        }}
      />
      <input
        required
        value={addressField.mobile}
        type="text"
        placeholder="Enter Phone Number"
        minLength={10}
        maxLength={10}
        onChange={(event) => {
          onAddressEditHandler(event, "mobile");
        }}
      />

      <div className="address-form-btn">
        <button type="submit">SAVE</button>
        <button onClick={()=>clearField}>CLEAR</button>
      </div>
    </form>
  );
};