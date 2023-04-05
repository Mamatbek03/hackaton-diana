import { Box, Button, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useProduct } from "../../../contexts/ProductContextProvider";

import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct, product, setProduct } = useProduct();

  // const [product, setProduct] = useState({
  //   name: "",
  //   gender: "",
  //   size: 0,
  //   color: "",
  //   price: 0,
  //   description: "",
  //   image: "",
  //   like: 0,
  //   comments: [],
  // });

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

  return (
    <div
      style={{
        backgroundColor: "rgb(219, 219, 219)",
        width: "100%",
        height: "auto",
        padding: "70px 0 200px ",
        fontFamily: "sans-serif",
        marginTop: "-35px",
      }}
    >
      <Box className="pizda">
        <Container
          className="wrap"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            width: "35%",
            paddingBottom: "50px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
        >
          <h1>Admin Page</h1>
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            name="gender"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Size"
            variant="outlined"
            name="size"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Color"
            variant="outlined"
            name="color"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            size="small"
            sx={{ padding: "10px" }}
          />
          <TextField
            onChange={handleInput}
            className="admin_inp"
            id="outlined-basic"
            label="Image"
            variant="outlined"
            name="image"
            size="small"
            sx={{ padding: "10px" }}
          />
          <Button
            className="admin_btn"
            sx={{ width: "40%", marginLeft: "30%" }}
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
    </div>
  );
};

export default AddProduct;
