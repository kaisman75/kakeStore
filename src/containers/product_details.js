
import React,{useEffect} from 'react'
import {useSelector,useDispatch}from 'react-redux';
import axios from 'axios';
import{useParams}from 'react-router-dom';
import {selected_Product} from '../redux/actions/productAction'




function ProductDetails() {
  
    const { productId } = useParams();
    console.log(productId);

   
    
    
    return (
        <div  className='ui container center'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

       
           selected_Product
        </div>
    )
}

export default ProductDetails
