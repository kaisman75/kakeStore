import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import ComponentProduct from './componentProduct';
import { set_Products } from '../redux/actions/productAction';
import ProductDetails from './product_details';




function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()

  const fetchingProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err:", err)
      }  )
    console.log(response.data)
    dispatch(set_Products((response.data)))

  }
 
 
  useEffect(() => {
    fetchingProducts()
   
  },[]);
  
  
  
  
  return (
    <div className="container">
      <ComponentProduct />
      <ProductDetails/>
    </div>
  )
}

export default ProductListing

