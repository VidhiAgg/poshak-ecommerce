import React, { useContext } from "react";
import styles from "./categories.module.css";
import { Link, useNavigate } from "react-router-dom";
import { APIContext } from "../../context/APIContext";
import { ProductListContext } from "../../context/ProductListingContext/ProductListContext";
import {ProjectUtils as Constants} from '../../utils/ProjectUtils'

const Categories = () => {
  const { categories } = useContext(APIContext);
const {productsDispatch} = useContext(ProductListContext);
const navigate = useNavigate();

  return (
    <div className={styles["category"]}>
      <h1>Categories</h1>
      <div className={styles["layout"]}>
        {categories?.map((data) => {
          const { _id, categoryName, image } = data;
          return (
            <div
              key={_id}
              style={{ backgroundImage: `url(${image})` }}
              
              className={styles["category-card"]}  onClick={() => {
                productsDispatch(({type: Constants._CLEAR_FILTER_}))
                productsDispatch({type: Constants._CATEGORIES_, payload:data.categoryName})

                navigate("/products");
              }}
              
            >
              <Link className={styles["category-link"]}>
                <p>
                  {categoryName}'s Collection
                  <i className="material-icons">navigate_next</i>
                </p>
              </Link>
            </div>
          );
        })}
        {/* <div className={styles["women-category-card"]}>
          <Link className={styles["category-link"]}>
            <p>
              Women Collection
              <i className="material-icons">navigate_next</i>
            </p>
          </Link>
        </div>
        <div className="child-category-card">
          <Link>
            <i className="material-icons">navigate_next</i>
            <p>Kids Collection</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
