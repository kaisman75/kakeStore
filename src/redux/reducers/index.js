import { combineReducers } from "redux";
import { product_Reducer,selectedProduct } from "./product_Reducer";



 const Reducer = combineReducers({
   allProducts:product_Reducer,
   product:selectedProduct
 })

export default Reducer;