import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [allData, setAllData] = useState([])
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1);
  const [rengeValue, setRengeValue] = useState([0,0]);
  const [category,setCategory] = useState('Lifestyle')
  const [selectedColor, setSelectedColor] = useState('')
  const [productPerPage, setProductPerPage] = useState(12);
  useEffect(() => {
      if (productPerPage) {
        fetchData()
      }
  }, [page, category, productPerPage]);
  

  async function fetchData() {
    await axios.get(`http://127.0.0.1:8000/api/categories/${category}/products?page=${page}&per_page=${productPerPage}`, {
      headers: {
        'Content-Type': 'application/json',
        }
     })
.then( function (response) {
  // handle success   
  console.log(response);
  setAllData(response.data);
  setProducts(response.data.data)
})
.catch(function (error) {
  // handle error
  setProducts([])
  setAllData([]);
  console.log(error);
})
  }







  return (
    <ProductsContext.Provider value={{
      AllData: [allData, setAllData],
      Products : [products, setProducts],
      Pages: [page, setPage],
      Category: [category, setCategory],
      RengeValue: [rengeValue, setRengeValue],
      SelectedColors: [selectedColor, setSelectedColor],
      ProductPrePage: [productPerPage, setProductPerPage],
    }
}
    >
        {props.children}
    </ProductsContext.Provider>
    )
}