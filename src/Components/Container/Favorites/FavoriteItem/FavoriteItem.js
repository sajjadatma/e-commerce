import React from "react";
import Icon from "@mdi/react";
import './FavoriteItem.scss'
import Button from "@material-ui/core/Button";
import { mdiCartPlus, mdiWindowClose } from "@mdi/js";
export default function FavoriteItem() {
  return (
    <div className="favorite__item">
      <img
        className='items__img'
        alt={"images"}
        src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d90a0ed-c6c1-45f6-8cd0-2d14a8853e68/react-vision-herrenschuh-mhp2XD.jpg'
      />
      <span className="favorite__title">Shoe Number 1</span>
          <span className="favorite__price">$20</span>
      <Button variant='outlined' size='small' color='primary'>
        <Icon path={mdiCartPlus} title='Remove' size={0.8} />
        ADD TO CART
      </Button>
      <div className='items__remove'>
        <Icon path={mdiWindowClose} title='Remove' size={0.8} />
      </div>
    </div>
  );
}
