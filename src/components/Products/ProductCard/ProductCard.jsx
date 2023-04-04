import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Container, IconButton } from "@mui/material";
import { useCart } from "../../../contexts/CartContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ product }) {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const { deleteProduct, getProductForComments, addProductToReviews } =
    useProduct();
  const { addProductToCart, checkProductInCart } = useCart();
  const toggle = (flag) => {
    if (flag && !JSON.parse(localStorage.getItem("reviews"))) {
      addProductToReviews(product.id);
    }
    return flag ? setFlag(false) : setFlag(true);
  };

  return (
    <Container>
      <Card className="Card" style={{ width: "350px", margin: "10px" }}>
        <CardMedia
          sx={{ height: "200px ", width: "350px" }}
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
          <IconButton onClick={() => toggle(flag)}>
            <FavoriteIcon color={flag ? "white" : "error"} />
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
        </CardActions>
      </Card>
    </Container>
  );
}
