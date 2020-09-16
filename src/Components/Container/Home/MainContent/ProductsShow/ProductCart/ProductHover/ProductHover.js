import React, { useContext } from "react";
import "./ProductHover.scss";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { mdiHeartOutline, mdiCartPlus } from "@mdi/js";
import { CartContext } from "../../../../../../../Contexts/AllContexts/CartContext";
export default function ProductHover(props) {
  const { CartFunc, Cart } = useContext(CartContext);
  const [shoppingCart,] = Cart;
  return (
    <>
      <Link className='product__cart-hover' to={`/details/${props.product.id}`}>
        <div className='product__cart-hover_title'>
          <span>
            {props.product.name} - ${props.product.price}
          </span>
          <span>Click for Details</span>
        </div>
      </Link>
      <div className='card-hover__buttons'>
        <div
          disabled={shoppingCart.some((item) => item.id === props.product.id)}
          onClick={() => CartFunc(props.product)}>
          {shoppingCart.some((item) => item.id === props.product.id) ? (
            <h4>
      
              In Cart
            </h4>
          ) : (
            <Icon path={mdiCartPlus} title='Login' size={1.5} color={"white"} />
          )}
        </div>
        <div>
          <Icon
            path={mdiHeartOutline}
            title='Login'
            size={1.5}
            color={"white"}
          />
          <Icon
            path={mdiHeartOutline}
            title='Login'
            size={1.5}
            color={"white"}
          />
        </div>
      </div>
    </>
  );
}
