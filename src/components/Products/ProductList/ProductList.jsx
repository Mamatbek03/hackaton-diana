import { Pagination, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../../contexts/ProductContextProvider";
import AddProduct from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  const [page, setPage] = useState(1);
  const shoesPerPage = 9;
  const count = Math.ceil(products.length / shoesPerPage);

  const searchParams = useSearchParams();

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Container>
        <SideBar />
        {currentData().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Stack spacing={1}>
          <Pagination
            onChange={handlePage}
            page={page}
            count={count}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductList;
