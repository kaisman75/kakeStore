import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import ComponentProduct from './componentProduct';
import { set_Products } from '../redux/actions/productAction';



function ProductListing() {
  const dispatch = useDispatch()
 
  const fetchingProducts= async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products')
      .catch((err)=>{
           console.log("Err:",err)
      });
    console.log(response);
   dispatch(set_Products(response.data))
  }  
 
  useEffect(()=>{
    fetchingProducts();
  },[]);
  const Products = useSelector(state=>state.allProducts.roducts);
  console.log(Products)
    return (
        <div  className='ui grid container '>
         < ComponentProduct/>
        </div>
    )
}

export default ProductListing

