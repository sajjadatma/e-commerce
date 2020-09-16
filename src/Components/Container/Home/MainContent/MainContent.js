import React from "react";
import "./MainContent.scss";
import Filters from "./Filters/Filters";
import ProductsShow from "./ProductsShow/ProductsShow";
export default function MainContent() {
  return (
    <div className='main__content'>
      <Filters />
      <ProductsShow />
    </div>
  );
}
