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

import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect } from "react";
import { ADMIN } from "../../../helpers/consts";
import { useAuth } from "../../../contexts/AuthContextProvider";
import "./styles.css";
export default function ProductCard({ product }) {
  // const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const {
    logout,
    user: { email },
  } = useAuth();
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
    <Card
      className="card"
      sx={{
        width: { sm: "350px", md: "350px", lg: "350px" },
        margin: "10px",
        height: { sm: "350px", md: "350px" },
      }}
    >
      <CardMedia
        className="card-media"
        sx={{ height: "200px ", width: "350px" }}
        src={product.image}
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
      <CardActions sx={{ display: "block" }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <IconButton
            sx={{ margin: "0 5px 0 5px" }}
            onClick={() => addProductToCart(product)}
          >
            <AddShoppingCartIcon
              color={checkProductInCart(product.id) ? "primary" : ""}
            />
          </IconButton>
          <IconButton
            sx={{ margin: "0 5px 0 5px" }}
            onClick={() => addProductToReviews(product.id)}
          >
            <BookmarkIcon
              color={checkProductInReviews(product.id) ? "primary" : "white"}
            />
          </IconButton>
          <IconButton
            sx={{ margin: "0 5px 0 5px" }}
            onClick={() => addProductLike(product)}
          >
            <FavoriteIcon
              color={checkProductsLikes(product.id) ? "error" : "white"}
            />
            {checkProductsLikes(product.id) ? addLike() : product.like}
          </IconButton>

          <Button
            sx={{
              margin: "0 5px 0 5px",
              backgroundColor: "gold",
              color: "black",
            }}
            onClick={() => navigate(`/details/${product.id}`)}
            size="small"
          >
            Favorites
          </Button>
        </div>
        {email === ADMIN ? (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{ backgroundColor: "green", color: "white", mx: 3 }}
              onClick={() => {
                navigate(`/edit/${product.id}`);
              }}
              size="small"
            >
              Edit
            </Button>
            <Button
              sx={{ backgroundColor: "pink", color: "black", mx: 1 }}
              onClick={() => deleteProduct(product.id)}
              size="small"
            >
              Delete
            </Button>
          </div>
        ) : null}
      </CardActions>
    </Card>
  );
}
