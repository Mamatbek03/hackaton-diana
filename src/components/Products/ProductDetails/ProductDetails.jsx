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
      <Card sx={{ maxWidth: 500 }}>
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
            <Typography variant="body2" color="text.secondary">
              {productDetails.description}
            </Typography>
            Comments:
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default EditProduct;
