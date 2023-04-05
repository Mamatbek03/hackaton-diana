import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductReview = () => {
  const reviews = JSON.parse(localStorage.getItem("reviews"));

  return (
    <div className="favor">
      {reviews.map((review) => (
        <Card className="Card" style={{ width: "350px", margin: "10px" }}>
          <CardMedia
            sx={{ height: "200px ", width: "350px" }}
            image={review.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {review.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {review.color}
            </Typography>
          </CardContent>
          {/* <CardActions>
      <IconButton onClick={() => addProductToReviews(product.id)}>
        <FavoriteIcon
          color={checkProductInReviews(product.id) ? "error" : "white"}
        />
      </IconButton>

      <Button
        onClick={() => navigate(`/details/${product.id}`)}
        size="small"
      >
        Reviews
      </Button>
      <IconButton onClick={() => addProductToCart(product)}>
        <AddShoppingCartIcon
          color={checkProductInCart(product.id) ? "primary" : ""}
        />
      </IconButton>
      <Button
        onClick={() => {
          navigate(`/edit/${product.id}`);
        }}
        size="small"
      >
        Edit
      </Button>
      <Button onClick={() => deleteProduct(product.id)} size="small">
        Delete
      </Button>
    </CardActions> */}
        </Card>
      ))}
    </div>
  );
};

export default ProductReview;
