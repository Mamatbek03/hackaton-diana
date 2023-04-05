import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API, PRODUCTS } from "../helpers/consts";
import { calcSubPrice } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import { async } from "q";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productForEdit: {},
  productsPerPage: [],
  productDetails: {},
  productForReviews: {},
  productForEdit: {},
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
    case "GET_PRODUCT_FOR_REVIEWS":
      return { ...state, productsPerPage: action.payload };
    case "GET_PRODUCT_FOR_LIKES":
      return { ...state, productForEdit: action.payload };

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
  // ! get one Product
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
  // ! review
  function createStorage() {
    if (!JSON.parse(localStorage.getItem("reviews"))) {
      localStorage.setItem("reviews", JSON.stringify([]));
    }
  }

  async function addProductToReviews(id) {
    if (!JSON.parse(localStorage.getItem("reviews"))) {
      localStorage.setItem("reviews", JSON.stringify([]));
    }
    let reviews = JSON.parse(localStorage.getItem("reviews"));

    let { data } = await axios.get(`${API}/${id}`);

    let productToFind = reviews.filter((elem) => elem.id === id);

    if (productToFind.length === 0) {
      reviews.push(data);
    } else {
      reviews = reviews.filter((elem) => elem.id !== id);
    }
    localStorage.setItem("reviews", JSON.stringify(reviews));
    dispatch({ type: "GET_PRODUCT_FOR_REVIEWS", payload: data });
  }

  function checkProductInReviews(id) {
    let reviews = JSON.parse(localStorage.getItem("reviews"));
    if (reviews) {
      let newReviews = reviews.filter((elem) => elem.id == id);
      return newReviews.length > 0 ? true : false;
    }
  }
  async function addProductLike(product) {
    if (!JSON.parse(localStorage.getItem("likes"))) {
      localStorage.setItem("likes", JSON.stringify([]));
    }
    let reviews = JSON.parse(localStorage.getItem("likes"));

    let { data } = await axios.get(`${API}/${product.id}`);

    let productToFind = reviews.filter((elem) => elem.id === product.id);

    if (productToFind.length === 0) {
      reviews.push(data);
      data.like += 1;
      await axios.patch(`${API}/${product.id}`, data);

      console.log(data.like);
    } else {
      reviews = reviews.filter((elem) => elem.id !== product.id);
      data.like -= 1;

      await axios.patch(`${API}/${product.id}`, data);
    }
    localStorage.setItem("likes", JSON.stringify(reviews));
    dispatch({ type: "GET_PRODUCT_FOR_LIKES", payload: data });
    // console.log(reviews);
  }

  function checkProductsLikes(id) {
    let reviews = JSON.parse(localStorage.getItem("likes"));
    if (reviews) {
      let newReviews = reviews.filter((elem) => elem.id == id);
      // console.log(newReviews);
      return newReviews.length > 0 ? true : false;
    }
  }

  // ! like
  async function getLikes() {
    const likes = JSON.parse(localStorage.getItem("likes"));
    for (let i = 0; i < state.products.length; i++) {
      for (let j = 0; j < likes.length; j++) {
        if (state.products[i].id === likes[j].id) {
          await axios.patch(`${API}/${likes[j].id}`, likes[j]);
          console.log(213);
        }
      }
    }
  }

  const values = {
    getLikes,
    checkProductsLikes,
    addProductLike,
    addProductToReviews,
    createStorage,
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
    checkProductInReviews,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
