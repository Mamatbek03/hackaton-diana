import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, PRODUCTS } from "../helpers/consts";
import { calcSubPrice } from "../helpers/functions";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };

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
  // ! delete
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  const values = {
    deleteProduct,
    addProduct,
    getProducts,
    products: state.products,
    addProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
