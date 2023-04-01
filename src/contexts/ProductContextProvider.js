import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, PRODUCTS } from "../helpers/consts";
import { calcSubPrice } from "../helpers/functions";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productForEdit: {},
  productsPerPage: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_FOR_EDIT":
      return { ...state, productForEdit: action.payload };
    case "GET_PRODUCTS_PER_PAGE":
      return { ...state, productsPerPage: action.payload };

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
  // ! products per one Page for pagination
  async function getProductsPerPage() {
    let { data } = await axios.get(API + "?_limit=9");
    dispatch({ type: "GET_PRODUCTS_PER_PAGE", payload: data });
  }
  // ! get editing Product
  async function getProductForEdit(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_FOR_EDIT", payload: data });
  }
  // !edit
  async function saveEditProduct(product) {
    await axios.patch(`${API}/${product.id}`, product);
    getProducts();
  }

  const values = {
    saveEditProduct,
    getProductForEdit,
    productForEdit: state.productForEdit,
    getProductsPerPage,
    deleteProduct,
    addProduct,
    getProducts,
    products: state.products,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
