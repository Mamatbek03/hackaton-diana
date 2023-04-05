import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";
import "./EditProduct.css";
const EditProduct = () => {
  const navigate = useNavigate();
  const { productForEdit, getProductForEdit, saveEditProduct } = useProduct();
  const [editProduct, setEditProduct] = useState(productForEdit);
  const { id } = useParams();

  useEffect(() => {
    getProductForEdit(id);
  }, []);

  useEffect(() => {
    setEditProduct(productForEdit);
  }, [productForEdit]);

  console.log(editProduct);
  function handleInput(e) {
    if (e.target.name === "size") {
      let obj = { ...editProduct, [e.target.name]: Number(e.target.value) };
      setEditProduct(obj);
    } else if (e.target.name === "price") {
      let obj = { ...editProduct, [e.target.name]: Number(e.target.value) };
      setEditProduct(obj);
    } else {
      let obj = { ...editProduct, [e.target.name]: e.target.value };
      setEditProduct(obj);
    }
    console.log(editProduct);
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
      <Box className="pizza">
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
          <h1>Edit Product</h1>
          <TextField
            value={editProduct.name || ""}
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
            value={editProduct.gender || ""}
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
            value={editProduct.size || ""}
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
            value={editProduct.color || ""}
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
            value={editProduct.price || ""}
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
            value={editProduct.description || ""}
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
            value={editProduct.image || ""}
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
              navigate("/products");
              saveEditProduct(editProduct);
            }}
            size="large"
            variant="outlined"
          >
            save Changes
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default EditProduct;
