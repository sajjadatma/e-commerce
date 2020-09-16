import React, { useContext, useState, useEffect } from "react";
import "./Price.scss";
import Slider from "@material-ui/core/Slider";
import { ProductsContext } from "../../../../../../Contexts/AllContexts/ProductContext";

export default function Price() {
  const { Products, RengeValue, AllData } = useContext(ProductsContext);
  const [allData, setAllData] = AllData;
  const [products, setProducts] = Products;
  const [rangeValue, setRangeValue] = RengeValue;
  let Product = allData.data
  let maximum;
  let minimum;
  if (Product !== undefined) {
    const SetPrice = Product.map((item) => item.price);
     maximum = Math.max(...SetPrice);
     minimum = Math.min(...SetPrice);
  }

  const handleChange = (event, newValue) => {
    filteredProducts();
    setRangeValue(newValue);
  };

  const filteredProducts = () => {
    let filteredArray =[]
     Product.filter((item) => {
        if (item.price >= rangeValue[1]) {
          filteredArray.push(item)
          
        }
    });
    setProducts([...filteredArray]);
    
  }
  return (
    <div className='price'>
      <div className='price__value'>
        <span>{rangeValue[0] > minimum ? rangeValue[0] : minimum}</span>
        <span>{rangeValue[1] < 1 ? maximum : rangeValue[1]}</span>
      </div>
      <Slider
        value={rangeValue}
        min={minimum}
        max={maximum}
        onChange={handleChange}
      />
    </div>
  );
}
