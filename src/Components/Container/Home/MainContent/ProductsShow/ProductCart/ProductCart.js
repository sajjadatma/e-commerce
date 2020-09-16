import React, { useState } from "react";
import "./ProductCart.scss";
import CardHover from "./ProductHover/ProductHover";
export default function ProductCart(props) {
  const [hover, sethover] = useState(false);  
  const onMouseOverFunc = () => {
    sethover(true);
  };

  const onMouseLeaveFunc = () => {
    sethover(false);
  };
  const product  = props.product

  return (
    <div
      onMouseOver={onMouseOverFunc}
      onMouseLeave={onMouseLeaveFunc}
      className='products__product'
      style={{backgroundImage:`url(${product.image})`}}
    >
      {hover ? <CardHover product={product} /> : null}
      <h2 style={{color:'black',fontSize:14}}>{product.name}</h2>
      <h5>${product.price}</h5>

      {product.new ? <h6 className="products__product_new">NEW</h6> : null}    
      {product.off > 0 ? <h6 className="products__product_discount">{product.off}% OFF</h6> :null }      
  
    </div>
  );
}
