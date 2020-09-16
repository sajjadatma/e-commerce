import React,{useState,useContext} from 'react'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import './ProductItem.scss';
import {CartContext} from '../../../../Contexts/AllContexts/CartContext'

export default function ProductItem(props) {
  const Product = props.product
  const { totalFunc, Cart,Total,RemoveProduct,ReduceCount,AddCount } = useContext(CartContext);
  const [shoppingCart,] = Cart;

    return (
      <div className='product__items'>
        <div className="items__img">
        <img
             alt={'images'}
            src={Product.image}
          />
        </div>
          <div className='items__title'>
          <h4>{Product.name}</h4>
          <div className="items__colors">
            {Product.colors.map((color, idx) => {
              return (
                <div style={{background:`${color}`}} className="items__colors__color"></div>
              )
            } )}
        
          </div>
 

        </div>
          <div className='items__price'>
          <span>${Product.price}</span>
          </div>
          <ButtonGroup
            id='items__buttons'
            disableElevation
            variant='contained'
            color='primary'>
            <Button onClick={()=>ReduceCount(Product,Product.id)} size='small'>-</Button>
          <strong>{Product.ProductCount}</strong>
            <Button onClick={()=>AddCount(Product.id)} size='small'>+</Button>
          </ButtonGroup>
          <div className='items__total'>
          <span>$ {Product.total}</span>
          </div>
          <div className='items__remove' onClick={()=>RemoveProduct(Product.id)}>
            <Icon path={mdiWindowClose} title='Remove' size={0.8} />
          </div>
        </div>
    )
}
