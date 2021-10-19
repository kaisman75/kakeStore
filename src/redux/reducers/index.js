import { combineReducers } from "redux";
import { product_Reducer } from "./product_Reducer";



 const Reducer = combineReducers({
   allProducts:product_Reducer
 })

export default Reducer;