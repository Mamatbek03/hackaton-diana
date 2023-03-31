import { Box, Button, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useProduct } from "../../../contexts/ProductContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    name: "",
    gender: "",
    size: 0,
    color: "",
    price: 0,
    description: "",
    image: "",
  });

  function handleInput(e) {
    if (e.target.name === "size") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  }
  console.log(product);

  return (
    <Box>
      <Container>
        <h1>Admin Page</h1>
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          name="gender"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Size"
          variant="outlined"
          name="size"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Color"
          variant="outlined"
          name="color"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          size="small"
        />
        <TextField
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="image"
          size="small"
        />
        <Button
          className="admin_btn"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
          size="large"
          variant="outlined"
        >
          Add Product
        </Button>
      </Container>
    </Box>
  );
};

export default AddProduct;
