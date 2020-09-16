import React, { useContext } from "react";
import "./ProductsShow.scss";
import ProductCart from "./ProductCart/ProductCart";
import Pagination from "@material-ui/lab/Pagination";
import { ProductsContext } from "../../../../../Contexts/AllContexts/ProductContext";
export default function ProductsShow() {
  const { AllData, Products, Pages,  } = useContext(ProductsContext);
  const [allData, ] = AllData;
  const [products, ] = Products;
  const [pagesValue, setPagesValue] = Pages;
  const handleChange = (event, value) => {
    setPagesValue(value);
  };
  
  const FilteredByPrice = (
    <React.Fragment>
      {products.map((product, idx) => {
        return <ProductCart key={idx} product={product} />
      })}
    </React.Fragment>
  );

  return (
    <div className='products__paginate'>
      <div className='products'>{FilteredByPrice}</div>
      <div className='paginate'>
        <Pagination
          onChange={handleChange}
          shape={"rounded"}
          page={pagesValue}
          count={allData.last_page}
          color='primary'
        />
      </div>
    </div>
  );
}
