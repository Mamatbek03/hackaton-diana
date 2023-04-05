import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddComment } from "@mui/icons-material";
import "../ProductDetails/ProductDetails.css";

const EditProduct = () => {
  const navigate = useNavigate();
  const { productForEdit, getProductForEdit, saveEditProduct } = useProduct();

  const [productDetails, setProductDetails] = useState(productForEdit);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  useEffect(() => {
    getProductForEdit(id);
  }, []);

  useEffect(() => {
    setProductDetails(productForEdit);
  }, [productForEdit]);
  function addComment() {
    productDetails.comments.push(comment);
    saveEditProduct(productDetails);
    console.log(productDetails.comments);
  }
  function clear() {
    setComment("");
  }

  return (
    <Box>
      <div className="allPage">
        <Card
          sx={{
            width: "300px",
            marginLeft: "10%",
            marginBottom: "5%",
            display: "flex",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={productDetails.image}
              alt="shoe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productDetails.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.like} likes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.size}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.price}$
              </Typography>
              <Typography
                sx={{ marginBottom: "10%" }}
                variant="body2"
                color="text.secondary"
              >
                {productDetails.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="comments">
          <h2>Add Comment:</h2>
          <TextField
            onChange={(e) => {
              setComment(e.target.value);
            }}
            sx={{ width: "100%", height: "40%" }}
            label="this should have been a comment"
            variant="outlined"
            name="name"
            size="small"
            value={comment}
          />
          <Button
            sx={{
              color: "black",
              backgroundColor: "lightblue",
            }}
            onClick={() => {
              addComment();
              saveEditProduct(productDetails);
              clear();
            }}
          >
            add comment
          </Button>
          <h3> Comments:</h3>
          {productDetails.comments?.map((comment) => (
            <p>{comment}</p>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default EditProduct;
