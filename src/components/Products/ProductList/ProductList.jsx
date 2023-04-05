import { Pagination, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../../contexts/ProductContextProvider";
import AddProduct from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./style.css";

const ProductList = () => {
  const { getProducts, products, getLikes } = useProduct();
  const [page, setPage] = useState(1);
  const shoesPerPage = 9;
  const count = Math.ceil(products.length / shoesPerPage);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function handlePage(event, value) {
    setPage(value);
  }

  function currentData() {
    let start = (page - 1) * shoesPerPage;
    let end = start + shoesPerPage;
    return products.slice(start, end);
  }

  return (
    <div className="list_wrapper" style={{ display: "flex" }}>
      <SideBar />
      <div className="list_item">
        <div
          className="product-card"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {currentData().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}{" "}
        </div>
        <div className="pagination">
          <Stack spacing={1}>
            <Pagination
              onChange={handlePage}
              page={page}
              count={count}
              variant="outlined"
              shape="rounded"
              sx={{ display: "flex", justifyContent: "center" }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
