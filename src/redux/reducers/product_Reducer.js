import { actionTypes } from "../contants/action_types";



const initialState = {
    products:[],
}

 
    



export const product_Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products:payload }
        case actionTypes.SELECTED_PRODUCT:
            return {...state,product:payload}    
        default:
            return state;
    }
}

