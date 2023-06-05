
import {ProjectUtils as Constants} from '../utils/ProjectUtils'

export function reducer (filters, action){
const checkBoxHandlerFunction = (value) =>{
      return filters.categories.includes(value) ? 
        {
            ...filters, categories :
            [...filters["categories"].filter (category => category!==value)]
        }:
       { ...filters, categories : [...filters["categories"], value]}
    
    }

    switch(action.type){


        // case Constants._SET_CATEGORIES_ : {
        //     return{
        //         ...filters, categoriesData: {...filters.categoriesData, data:action.payload}
        //     }
        // }

        // case Constants._SET_PRODUCTS_ : {
        //     return{
        //         ...filters, productsData: {...filters.productsData, data:action.payload}
        //     }
        // }

         case Constants._PRICE_RANGE_FILTER_ : {
            return {
                ...filters,priceRange : action.payload
            }
         }

         case Constants._CATEGORIES_ :{
            return checkBoxHandlerFunction(action.payload);
         }

         case Constants._RATINGS_ :{
            return {...filters,sortByRating : action.payload} ;
         }

         case Constants._LOW_ :{
            return {...filters,sortByPrice : Constants._LOW_} ;
         }

         case Constants._HIGH_:{
            return {...filters,sortByPrice : Constants._HIGH_} ;
         }
         case Constants._SEARCH_FILTER_:{
         
            return {...filters,search : action.payload} ;
         }

         case Constants._CLEAR_FILTER_:{
            return {
                priceRange : 0,
                sortByRating: "",
                search: "",
                inStock: false,
                sortByPrice:"",
                categories:[]
            }
         }
        

        default: return filters;
    }

}