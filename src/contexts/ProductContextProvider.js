import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API, PRODUCTS } from "../helpers/consts";
import { calcSubPrice } from "../helpers/functions";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productForEdit: {},
  productsPerPage: [],
  productDetails: {},
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_FOR_EDIT":
      return { ...state, productForEdit: action.payload };
    case "GET_PRODUCTS_PER_PAGE":
      return { ...state, productsPerPage: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productsPerPage: action.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState({
    name: "",
    gender: "",
    size: 0,
    color: "",
    price: 0,
    description: "",
    image: "",
    like: 0,
    comments: [],
  });

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  // ! get
  async function getProducts() {
    const { data } = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  }
  // ! create
  async function addProduct(product) {
    await axios.post(API, product);
    getProducts();
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
  // ! filter/category
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };
  // ! DETAILS
  async function getProductDetails(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  }
  console.log();

  const values = {
    getProductDetails,
    productDetails: state.productDetails,
    fetchByParams,
    saveEditProduct,
    getProductForEdit,
    productForEdit: state.productForEdit,
    getProductsPerPage,
    deleteProduct,
    addProduct,
    getProducts,
    products: state.products,
    product,
    setProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
