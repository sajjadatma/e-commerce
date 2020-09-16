import React,{useContext} from "react";
import "./ShoppingCart.scss";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiTrashCanOutline,mdiCreditCard } from "@mdi/js";
import Product from "./ProductItem/ProductItem";
import { CartContext } from "../../../Contexts/AllContexts/CartContext";



export default function ShoppingCart() {

  const { CartTotal,Total, Cart, CleanCart } = useContext(CartContext);
  const [shoppingCart,] = Cart;


  return (
    <div className='shoppingCart'>
      <div className='shoppingCart__header'>
        <h4>Shopping Cart</h4>
      </div>
         {shoppingCart.length < 1 ? (
          <h1>Pick a Product </h1>
      ) : (
          <>
        <div className='shoppingCart__content'>
              {shoppingCart.map((product, idx) => <Product product={product} key={idx} />)}
      </div>
      <div className='shoppingCart__total'>
        <Button onClick={CleanCart} variant='outlined' size='small' color='secondary'>
          <Icon path={mdiTrashCanOutline} title='Remove' size={0.8} />
          Clean Cart
        </Button>
        <div className='total__values'>
          <span>Total:</span>
                <span>{CartTotal()}</span>
          <Button variant='outlined' size='small' color='primary'>
          <Icon path={mdiCreditCard} title='Remove' size={0.8} />
                      Chekout
          </Button>
        </div>
            </div>
            </>
        )}
    </div>
  );
}

//{shoppingCart.reduce((a, b) => a + b.price * b.ProductCount, 0)}
