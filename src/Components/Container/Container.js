import React from "react";
import "./Container.scss";
import HomePage from "./Home/HomePage";
import Details from './Details/Details';
import Login from './Login/Login'
import Cart from './ShoppingCart/ShoppingCart'
import Favorites from './Favorites/Favorites'
import { Route, Switch } from "react-router-dom";
function Container() {

  return (
    <div className='main__container'>
      <div className='container'>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/favorites" exact component={Favorites} />

        </Switch>
      </div>
    </div>
  );
}
export default Container;
