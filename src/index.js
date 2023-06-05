import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {  BrowserRouter } from 'react-router-dom'
import { APIContextProvider } from "./frontend/context/APIContext";
import {ProductListContextProvider} from "./frontend/context/ProductListingContext/ProductListContext";
import { HandleFilterClickProvider } from "./frontend/pages/ProductListingPage/HandleFilterClick";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <APIContextProvider>
      <ProductListContextProvider>
        <HandleFilterClickProvider>
    <App />
    </HandleFilterClickProvider>
    </ProductListContextProvider>
    </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
