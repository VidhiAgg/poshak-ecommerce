import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    userAddress: [
      {
        id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        addressLine1: "Sector 16",
        addressLine2: "Metro Line 1",
        city: "Noida",
        state: "Uttar Pradesh",
        zipCode: "234701",
        country: "India",
        mobile:"99999999"
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
