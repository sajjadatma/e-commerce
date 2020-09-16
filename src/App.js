import React from "react";
import Layout from "./Layouts/Layout";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/AllContexts/ProductContext";
import { LoginProvider } from "./Contexts/AllContexts/LoginContext";
import { CartProvider } from "./Contexts/AllContexts/CartContext";

function App() {
  return (
    <LoginProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <div className='App'>
              <Layout />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </LoginProvider>
  );
}

export default App;
