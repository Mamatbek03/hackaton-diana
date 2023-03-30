import React, { createContext, useContext, useState } from "react";

export const productContext = createContext();

export const useProduct = () => {
  useContext(productContext);
};

const [products, setProducts] = useState([]);

const ProductContextProvider = () => {
  return <div>ProductContextProvider</div>;
};

export default ProductContextProvider;
