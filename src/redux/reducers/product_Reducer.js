import { actionTypes } from "../contants/action_types";
import { set_Products } from "../actions/productAction";


const initialState= {
products:[]
}


export const product_Reducer=(state=[],{type,payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state={...state,products:payload};
            
    
        default:
            return state;
    }
}

