import React from "react";
import { useSelector } from "react-redux";
import{Link} from 'react-router-dom';

function ComponentProduct() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((products) => {
    const { id, title, category, image, price } = products;
    return (
      <div className=" wide" key={id}>
        <Link to={`/details/${id}`}>
        <div className=" cards">
          <div className="card">
            <img src={image} alt={title} />
            <div className="contente">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
       </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ComponentProduct;
