import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiAccount, mdiHeartOutline, mdiCartPlus } from "@mdi/js";
export default function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header__search'>
          <Icon path={mdiMagnify} title='Search' size={0.8} />
        </div>
        <div className='header__title'>
          <h3>
            <Link to='/'>ATMA SHOP</Link>{" "}
          </h3>
        </div>
        <div className='header__login'>
          <Link to='/login'>
            <Icon path={mdiAccount} title='Login' size={0.8} />
          </Link>
        </div>
        <div className='header__wish'>
          <Link to='/favorites'>
            <Icon path={mdiHeartOutline} title='wish' size={0.8} />
          </Link>
        </div>
        <div className='header__shoppingcart'>
          <Link to='/cart'>
            <Icon path={mdiCartPlus} title='Login' size={0.8} />
          </Link>
        </div>
      </div>
      <div className='blueArea'>
        <h5>Mens LifeStyle Shoes Shop</h5>
      </div>
    </div>
  );
}
