import React, { useContext, useState } from "react";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { ProductListContext } from "../../context/ProductListingContext/ProductListContext";
import {ProjectUtils as Constants} from '../../utils/ProjectUtils'

export const Navigation = () => {
    const [showMenu, setShowMenu] = useState();
    const [showSearchBar, setSearchBar] = useState(false);
    const {productsDispatch} = useContext(ProductListContext);

    const navigate = useNavigate();
  
  return (

    <nav className="nav-header">

      <Link className="header-name" to={"/"}>

        Poshak
      </Link>

      <div className="search-bar" style={{display:showSearchBar && "flex" }} ><label>
      <input  className="search-input" onClick = {()=> navigate("/products")}type="text"
       placeholder="Search Product" 
      onChange={(event)=> 
        {
        productsDispatch(({type: Constants._CLEAR_FILTER_}));
        productsDispatch(({type: Constants._SEARCH_FILTER_, payload: event.target.value}))
        navigate("/products")
      
      }
      }/>
      </label>
      </div>
      <i className = "material-icons menu-button" onClick={()=>setShowMenu(!showMenu)}>menu</i>
      <ul className="menu-list" style={{display:showMenu  && "flex" }}>
        <li className="menu-list-items">
          <Link className="menu-link" onClick={()=>setSearchBar(!showSearchBar)}>
            <i className="material-icons">search</i>
            <p className="nav-menu-item-text">{setSearchBar ? "Show" : "Hide" }</p>
          </Link>
        </li>
        <li className="menu-list-items">
          <Link className="menu-link" to="/wishlist">
            <i className="material-icons">favorite</i>
            <p className="nav-menu-item-text">Wishlist</p>
          </Link>
        </li>
        <li className="menu-list-items">
          <Link className="menu-link" to="/cart">
            <i className="material-icons">shopping_cart</i>
            <p className="nav-menu-item-text">Bag</p>
          </Link>
        </li>
        <li className="menu-list-items">
          <Link className="menu-link" to="/profile">
            <i className="material-icons">person</i>
            <p className="nav-menu-item-text">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

//https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg
