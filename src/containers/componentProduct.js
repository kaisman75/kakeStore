import React from 'react'
import { useSelector } from 'react-redux';

function ComponentProduct() {

   const Products = useSelector(state => state.allProducts.products);
   console.log(Products)
   {Products.map((product)=>{
    const {id,title,category,image,price} = product
       return(
        <div className=' four column wide'>
   
        <div className='ui link cards'>

                       <div className='card'id={id}>
                             <div className='image'><img src={image} alt={title}/></div>
                               <div className='content'>
                               <div className='header'>{title}</div>
                               <div className='meta'><p>{category}</p></div>
                               <div className='meta price'><p>{price}</p></div>
                             </div>
                       </div>
                   

           </div>


 </div>

       )
   })}
   
  }
       
    


export default ComponentProduct

