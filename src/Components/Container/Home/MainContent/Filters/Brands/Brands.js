import React from "react";
import "./Brands.scss";
import Checkbox from "@material-ui/core/Checkbox";
export default function Brands() {
  return (
    <div className='brands'>
      <ul className='brands__list'>
        <li>
          <span>LifeStyle</span>
          <Checkbox name='checkedF' size="small" color='primary' />
        </li>
        <li>
          <span>LifeStyle</span>
          <Checkbox name='checkedF' size="small" color='primary' />
        </li>
        <li>
          <span>LifeStyle</span>
          <Checkbox name='checkedF' size="small" color='primary' />
        </li>
        <li>
          <span>LifeStyle</span>
          <Checkbox name='checkedF' size="small" color='primary' />
        </li>
      </ul>
    </div>
  );
}
