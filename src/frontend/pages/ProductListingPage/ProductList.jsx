import React from 'react'
import styles from "./productPage.module.css"
const ProductList = (data) => {
  return (

    <div className={styles['product-container']} key={data.id}>
    <img src={data.image_url} />
    <b >{data.name}
    </b>
    <p className={styles['product-desc']}>{data.description}</p>
    <p><b>₹{data.price}</b></p>
<p className={styles['product-rating']}>{data.rating} star</p>
    <button className={styles['wishlist-btn']}>Add to WishList</button>
    <button className={styles['cart-btn']}>Add to Cart</button>
  </div>

  )
}

export default ProductList