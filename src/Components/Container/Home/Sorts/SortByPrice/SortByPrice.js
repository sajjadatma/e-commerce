import React,{useContext} from 'react'
import { ProductsContext } from "../../../../../Contexts/AllContexts/ProductContext";

export default function SortByPrice() {
    const { Products  } = useContext(ProductsContext);
  const [products, setProducts] = Products;

    const sortUpToDown = () => {
            const sort = products.sort((a, b) =>  b.price - a.price);
            setProducts([...sort]); 
}
const sortDownToUp = () => {
    const sort = products.sort((a, b) =>   a.price - b.price );
    setProducts([...sort]); 
}
    return (
        <React.Fragment>
            <div className="sort_price_low" onClick={sortUpToDown}>
             Up To Down
            </div>
            <div className="sort_price_high" onClick={sortDownToUp}>
                Down To Up
                </div>
        </React.Fragment>
    )
}
