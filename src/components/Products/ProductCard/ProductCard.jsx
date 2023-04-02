import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../../contexts/ProductContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useCart } from "../../../contexts/CartContextProvider";

export default function ProductCard({ product }) {
  const { deleteProduct } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.color}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <IconButton onClick={() => addProductToCart(product)}>
          <AddShoppingCartIcon
            color={checkProductInCart(product.id) ? "primary" : ""}
          />
        </IconButton>
        <Button size="small">Edit</Button>
        <Button onClick={() => deleteProduct(product.id)} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
