import React, { createContext, useState,useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [count, setCount] = useState(1);
useEffect(() => {

}, [shoppingCart])
  const addToCart = (product) => {
    const Counted = { ...product, ProductCount:1, total: product.price };
    setShoppingCart((prev) => [...prev, Counted]);
  };

  const reduceCountOfProduct = (product, id) => {

    if (product.ProductCount <= 1 ) {
      const remove = shoppingCart.filter((item) => item.id !== id);
      setShoppingCart(remove);
    }else if (product.ProductCount > 0) {
      let tempCart = [...shoppingCart];
      const selectProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectProduct);
      const product = tempCart[index];
      product.ProductCount = product.ProductCount - 1;
      product.total = product.ProductCount * product.price;
      setShoppingCart([...tempCart]);
      cartTotal()
    }
  };

  const addCountOfProduct = (id) => {    
    let tempCart = [...shoppingCart];
    const selectProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];
    product.ProductCount = product.ProductCount + 1;
    product.total = product.ProductCount * product.price;
    setShoppingCart([...tempCart]);
    cartTotal()
    
  };

  const removeProduct = (id) => {
    const result = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart([...result]);
  };

  const cleanCart = () => {
    setShoppingCart([]);
  }
  const cartTotal = () => {
    const sum = shoppingCart.reduce((a, b) => a + b.total,0 )
    return sum
  }
  return (
    <CartContext.Provider
      value={{
        Cart: [shoppingCart, setShoppingCart],
        Count: [count, setCount],
        //functions
        CartFunc: addToCart,
        ReduceCount: reduceCountOfProduct,
        AddCount: addCountOfProduct,
        RemoveProduct: removeProduct,
        CleanCart: cleanCart,
        CartTotal :cartTotal
      }}>
      {props.children}
    </CartContext.Provider>
  );
};
