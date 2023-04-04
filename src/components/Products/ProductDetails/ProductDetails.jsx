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

const EditProduct = () => {
  const navigate = useNavigate();
  const { productForEdit, getProductForEdit } = useProduct();
  const [productDetails, setProductDetails] = useState(productForEdit);
  const { id } = useParams();

  useEffect(() => {
    getProductForEdit(id);
  }, []);

  useEffect(() => {
    setProductDetails(productForEdit);
  }, [productForEdit]);

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
              <FavoriteIcon />
              {productDetails.like}
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
            {/* {productDetails.comments.length !== 0
              ? productDetails.comments.map((comment) => {
                  <Typography>{comment}</Typography>;
                })
              : ""} */}

            <TextField
              sx={{ width: "100%", height: "40%" }}
              label="add comment"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default EditProduct;
