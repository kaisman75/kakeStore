import React from 'react'
import { useSelector } from 'react-redux';

function ComponentProduct() {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.products.map((product) => {
    const { id, title, category, image, price } = product
    return (
      <div className=' four column wide'>
        <div className='ui link cards'>
          <div className='card' key={id}>
            <div className='image'> <img src={image} alt={title}/></div>
            <div className='content'>
              <div className='header'>{title}</div>
              <div className='meta price'>${price}</div>
              <div className='meta'>{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>

      {renderList}

    </div>
  )

}





export default ComponentProduct

