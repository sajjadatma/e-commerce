import React,{useContext} from 'react'
import { ProductsContext } from "../../../../../Contexts/AllContexts/ProductContext";

export default function SortByNumber() {
    const { ProductPrePage  } = useContext(ProductsContext);
  const [productPerPage, setProductPerPage] = ProductPrePage;

    
    return (
        <React.Fragment>
                <div onClick={()=>setProductPerPage(12)}>
            12 Products
            </div>
            <div onClick={()=>setProductPerPage(9)}>
            9 Products
            </div>
            <div onClick={()=>setProductPerPage(6)}>
                6 Products
                </div>
        </React.Fragment>
    )
}
