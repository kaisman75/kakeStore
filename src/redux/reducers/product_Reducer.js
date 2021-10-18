import { actionTypes } from "../contants/action_types";



const initialState= {
    products:[{
    id:1,
    product:'Manai',
    category:'programmer'
    }]
};


export const product_Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;
            
    
        default:
            return state;
    }
}

