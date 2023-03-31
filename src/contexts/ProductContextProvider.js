import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: state.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: state.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! get
  async function getProducts() {
    const { data } = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  }
  // ! create
  async function addProduct(product) {
    await axios.post(API, product);
    getProducts();
    console.log(product);
  }

  const values = {
    addProduct,
    getProducts,
    products: state.products,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
