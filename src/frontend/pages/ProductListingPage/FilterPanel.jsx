import React, { useContext } from 'react'
import styles from './productPage.module.css'
import './filter.css'
import { ProductListContext } from '../../context/ProductListingContext/ProductListContext'
import { HandleFilterClickContext } from './HandleFilterClick'
import { ratings, ProjectUtils as Constants } from '../../utils/ProjectUtils'
const FilterPanel = () => {

const {lowestPrice, highestPrice,filters, categoryNamelist} = useContext(ProductListContext);

const{handlePriceRange, handleCheckBoxInput, handleRatingInput, handlePriceSortInput, handleClearButton} = useContext(HandleFilterClickContext);



  return (
    <div className={styles['filterPanel']}>
      <div className={styles['filter-header']}>
<h3>Filter</h3>
<button onClick = {handleClearButton}className={styles['clr-button']}>Clear</button>


      </div>
      <div  className='price-range'>
      <h4>Selected Price Range</h4>
      <label>
      <span className='price-label'>
      <span>{lowestPrice}</span>
          <span>{highestPrice}</span>
          </span>
        <input value={filters.priceRange} style={{width:"100%"}} type="range" min={lowestPrice} max ={highestPrice} 
        onChange={handlePriceRange}
        />
        {filters.priceRange}
        </label>

      </div>


      <div  className='category-checkbox'>
      <h4>Category</h4>
      <label>
        {
          categoryNamelist?.map(categoryName => 
            <li key={categoryName} style={{ listStyle: "none"}}>
            <input type='checkbox' 
            value={categoryName} checked={filters.categories.includes(categoryName)}
             onChange={handleCheckBoxInput} />{categoryName}
        </li>
            )
        }
        </label>

      </div>



      <div  className='ratings-filter'>
      <h4>Rating</h4>
      <label>
        {
          ratings?.map(rating => 
            <li key={rating} style={{ listStyle: "none"}}>
            <input type='radio' 
            value={rating} checked={filters.sortByRating.includes(rating)}
             onChange={handleRatingInput} />{rating} star and above
        </li>
            )
        }
        </label>

      </div>

      <div  className='price-sort-filter'>
      <h4>Sort By Price </h4>
      <label>
            <input type='radio' name="sortByPrice"
            value= {Constants._LOW_}
             onChange={handlePriceSortInput} />Price - Low to High
        </label>

        <label>
            <input type='radio' name="sortByPrice"
            value={Constants._HIGH_} 
             onChange={handlePriceSortInput} />Price - High to Low

        </label>

      </div>




      </div>
  )
}

export default FilterPanel