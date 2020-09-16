import React, { useContext, useRef } from "react";
import "./Categories.scss";
import { ProductsContext } from "../../../../../../Contexts/AllContexts/ProductContext";
export default function Categories(props) {
  const { Category} = useContext(ProductsContext);
  const [,setCategory] = Category;
  const refContainer = useRef(null);

  const categories = [
    "LifeStyle",
    "Running",
    "Training & Gym",
    "BasketBall",
    "Football",
    "Soccer",
    'BaseBall',
    'Golf'
  ];

  const onClickFunc = (item) => {
    setCategory(item);
     } 


  const disable = (categoryItem) => {
    let dis;
    if ( (categoryItem === 'Running')|| (categoryItem === 'LifeStyle') ) {
      dis = false 
    } else {
      dis = true
    } 
      return dis
  }
  return (
    <div className='categories'>
      <ul className='categories__list'>
        {categories.map((categoryItem,idx) => {
          return (
            <li key={idx} disabled ={disable(categoryItem)} className='sa' onClick={()=>onClickFunc(categoryItem)}>{categoryItem}</li>
          )
        })}
      </ul>
    </div>
  );
}
