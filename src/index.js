import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { APIContextProvider } from "./frontend/context/APIContext";
import { ProductListContextProvider } from "./frontend/context/ProductListingContext/ProductListContext";
import { HandleFilterClickProvider } from "./frontend/pages/ProductListingPage/HandleFilterClick";
import { AuthContextProvider } from "./frontend/context/AuthContext/AuthContext";
import WishListContextProvider from "./frontend/context/WishlistContext/WishListContext";
import CartListContextProvider from "./frontend/context/CartContext/CartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <APIContextProvider>
          <ProductListContextProvider>
            <WishListContextProvider>
              <CartListContextProvider>
                <HandleFilterClickProvider>
                  <App />
                </HandleFilterClickProvider>
              </CartListContextProvider>
            </WishListContextProvider>
          </ProductListContextProvider>
        </APIContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
