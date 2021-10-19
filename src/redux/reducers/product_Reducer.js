import { actionTypes } from "../contants/action_types";



const initialState = {products:[]}

 
    



export const product_Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products:payload }
        default:
            return state;
    }
}

