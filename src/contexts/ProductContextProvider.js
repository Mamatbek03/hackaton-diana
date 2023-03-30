import React, { createContext, useContext, useReducer } from "react";
import { PRODUCTS } from "../helpers/consts";
import { calcSubPrice } from "../helpers/functions";

export const productContext = createContext();

export const useProduct = () => {
  useContext(productContext);
};

const INIT_STATE = {
  products: JSON.parse(localStorage.getItem("products")),
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      break;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getProducts() {
    let products = JSON.parse(localStorage.getItem("products"));
    if (!products) {
      localStorage.setItem(
        "products",
        JSON.stringify({ shoes: [], totalPrice: 0 })
      );
      products = { shoes: [], totalPrice: 0 };
    }
    dispatch({ type: PRODUCTS.GET_PRODUCTS, payload: products });
  }

  //   create
  function addProductToProducts(product) {
    let products = JSON.parse(localStorage.getItem("products"));
    if (!products) {
      localStorage.setItem("products");
    }
    let newProducts = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let productFind = products.shoes.filter(
      (elem) => elem.item.id == product.id
    );
    if (productFind.length == 0) {
      products.shoes.push(product);
    } else {
      products.shoes = products.shoes.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    products.totalPrice = calcSubPrice(products.shoes);
  }

  const values = {
    getProducts,
    products: state.products,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
