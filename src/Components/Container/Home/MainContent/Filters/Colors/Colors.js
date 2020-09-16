import React, { useState,useContext } from "react";
import "./Colors.scss";
import {ProductsContext} from '../../../../../../Contexts/AllContexts/ProductContext'
export default function Colors() {
  const { SelectedColors,Products,AllData } = useContext(ProductsContext);
  const [allData, setAllData] = AllData;
  const [selectedColor, setSelectedColor] = SelectedColors;
  const [products, setProducts] = Products;
  const [colors, setcolors] = useState([
    "white",
    "yellow",
    "red",
    "green",
    "blue",
    "black",
  ]);


  const onClickFunc = (color) => {
    setSelectedColor(color);
    filterProductByColor(color)
  } 
  const filterProductByColor = (color) => {
    let filteredProducts = []
    const Product = [...allData.data]
     Product.find(item => {
       item.colors.find(colorArray => {        
        if (colorArray === color) {
          filteredProducts.splice(0,0,item);
        }
      })
     });    
     setProducts([...filteredProducts])
  }
  
  return (
    <div className='colors'>
      {colors.map((color, idx) => <div key={idx}
      onClick={()=>onClickFunc(color)}
        className={`colors__${color}`}>
        {color=== selectedColor ? '✔' : null}
        </div>)}
    </div>
  );
}
