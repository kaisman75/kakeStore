import  {actionTypes} from '../contants/action_types'

export const set_Products=(products)=>{
   return  {
        type:actionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProduct=(product)=>{
    return  {
         type:actionTypes.SELECTED_PRODUCT,
         payload:product,
     }
 }
 export const removeSelectedProduct=(product)=>{
    return  {
         type:actionTypes.REMOVE_SELECTED_PRODUCT,
         payload:product,
     }
 }