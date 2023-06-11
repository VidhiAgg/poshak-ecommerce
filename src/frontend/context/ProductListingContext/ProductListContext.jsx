import React, { createContext, useContext, useReducer } from "react";
import { APIContext } from "../APIContext";
import { reducer } from "../../reducer/PoshakReducer";
import {ProjectUtils as Constants} from '../../utils/ProjectUtils'


export const ProductListContext = createContext();



export const ProductListContextProvider = ({children}) => {
  // const[loader,setloader] = useState(false);
  const { products } = useContext(APIContext);
  const intialState = {
  //  categoriesData : {isLoading:false, isError: null, data: []},
  //   productsData : {isLoading:false, isError: null, data: []},

    priceRange : 0,
    sortByRating: "",
    search: "",
    inStock: false,
    sortByPrice:"",
    categories:[]
  };

const[filters,productsDispatch] = useReducer(reducer, intialState);

let {

   sortByRating : selectedRating,
       categories: selectedCategory,
       search: searchText,
      sortByPrice: priceSort,
      priceRange:  priceValueRange
} = filters

// useEffect(()=>{
//   fetchCategories(productDispatch, setloader);
//   fetchProducts();
// },[])

// const filteredProducts = filteredByPriceSort

  const lowestPrice = products?.reduce(
    (lowestValue, { price }) =>
      lowestValue < parseInt(price) ? lowestValue : price,
    0
  );

  const highestPrice = products?.reduce(
    (highestValue, { price }) =>
      highestValue > parseInt(price) ? highestValue : price,
    0
  );

  const categoryNamelist = products?.reduce((categorylist,{category}) =>
  categorylist.includes(category) ? categorylist : [...categorylist,category],[])


  const priceSortByLow =(filterByRating)=>

filterByRating.sort(({price: price1 },{price : price2}) => price1-price2)


const priceSortByHigh =(filterByRating)=>

filterByRating.sort(({price: price1 },{price : price2}) => price2-price1)

console.log(filters.search)


const filterBySearch = searchText.length > 0 ? 
products.filter(({name} )=> 
  name.toLowerCase().includes(searchText.toLowerCase())   
  )
: products


const filterByPriceRange = priceValueRange.length > 0 ?
filterBySearch.filter(({price}) => parseInt(price) >= (priceValueRange)) : 
filterBySearch

const filterByCategory = selectedCategory.length > 0 ?  
filterByPriceRange.filter(({category}) =>  selectedCategory.includes(category)

)
:
filterByPriceRange


const filterByRating = selectedRating.length > 0 ? 
filterByCategory.filter(({rating})=> parseInt(rating) >= parseInt(selectedRating))
: filterByCategory


const filteredProducts = priceSort.length > 0 ? 
priceSort === Constants._LOW_ ? 
[...filterByRating]?.sort(({price: price1 },{price : price2}) => parseInt(price1)-parseInt(price2)) :

[...filterByRating]?.sort(({price: price1 },{price : price2}) => parseInt(price2)-parseInt(price1))

:filterByRating

// const sortedData = 
//console.log(filteredProducts);


  return (
    <ProductListContext.Provider value={{ lowestPrice, highestPrice, categoryNamelist,
      productsDispatch, filters,filteredProducts
      
    }}>
      {children}
    </ProductListContext.Provider>
  );
};

// export default ProductListContextProvider;
