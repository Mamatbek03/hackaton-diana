import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

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
    <Box>
      <Container>
        <h1>Admin Page</h1>
        <TextField
          value={editProduct.name || ""}
          onChange={handleInput}
          className="admin_inp"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="small"
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
        />
        <Button
          className="admin_btn"
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
  );
};

export default EditProduct;
