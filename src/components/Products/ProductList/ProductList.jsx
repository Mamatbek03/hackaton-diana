import { Pagination, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../../contexts/ProductContextProvider";
import AddProduct from "../AddProduct/AddProduct";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  const [page, setPage] = useState(1);
  function handlePage(e) {
    setPage(e.target.value);
  }
  const shoesPerPage = 9;
  const count = Math.ceil(products.length / shoesPerPage);
  function currentData() {
    let start = (page - 1) * shoesPerPage;
    let end = start + shoesPerPage;
    return products.slice(start, end);
  }

  return (
    <Box>
      <AddProduct />
      <Container>
        {currentData().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Stack spacing={2}>
          <Pagination onChange={handlePage} count={count} shape="rounded" />
          <Pagination
            onChange={handlePage}
            count={10}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductList;
