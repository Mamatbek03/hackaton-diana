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
import { ADMIN } from "../../../helpers/consts";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useEffect } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function ProductCard({ product }) {
  // const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const {
    deleteProduct,
    addProductToReviews,
    checkProductInReviews,
    checkProductsLikes,
    addProductLike,
    saveEditProduct,
    getProductForEdit,
    productForEdit,
  } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();

  const {
    user: { email },
  } = useAuth();
  const [changeProduct, setChangeProduct] = useState(productForEdit);
  useEffect(() => {
    getProductForEdit(product.id);
  }, []);
  useEffect(() => {
    getProductForEdit(productForEdit);
  }, [productForEdit]);

  function addLike() {
    console.log(changeProduct);
    return product.like + 1;
  }
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
          <IconButton onClick={() => addProductToReviews(product.id)}>
            <BookmarkIcon
              color={checkProductInReviews(product.id) ? "primary" : "white"}
            />
          </IconButton>
          <IconButton onClick={() => addProductLike(product)}>
            <FavoriteIcon
              color={checkProductsLikes(product.id) ? "error" : "white"}
            />
            {checkProductsLikes(product.id) ? addLike() : product.like}
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

          {email === ADMIN ? (
            <>
              {" "}
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
            </>
          ) : null}
        </CardActions>
      </Card>
    </Container>
  );
}
