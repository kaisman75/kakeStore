
import React from 'react'
import axios from 'axios';
import{ useParams }from 'react-router-dom';





function ProductDetails() {
  
     const {productId}= useParams();
     console.log(productId);

    
    return (
        <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

     
          
        </div>
    )
}

export default ProductDetails
