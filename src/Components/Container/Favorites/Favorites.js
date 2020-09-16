import React from "react";
import "./Favorites.scss";
import FavoriteItem from './FavoriteItem/FavoriteItem'
export default function Favorites() {
  return (
    <div className='favorites'>
      <div className='favorites__header'>
        <h4>Favotites</h4>
      </div>
      <div className='favorites__products'>
              <FavoriteItem />

      </div>
    </div>
  );
}
