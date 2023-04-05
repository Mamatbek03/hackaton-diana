import React from "react";
import logo from "./Navbarimages/KicksLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import "./Adapt.css";
import BackgroundLetterAvatars from "../Logo/Logo";
import {
  Badge,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ExitToAppOutlined } from "@mui/icons-material";
import lupa from "./Navbarimages/icon.png";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Auth from "../Auth/Auth";
import { useState } from "react";
import { useEffect } from "react";
import { getCountProductsInCart } from "../../helpers/functions";
import { useCart } from "../../contexts/CartContextProvider";
import AuthGoogle from "../Auth/AuthGoogle";
import { useAuth } from "../../contexts/AuthContextProvider";
import { display } from "@mui/system";
import { ADMIN } from "../../helpers/consts";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const pages = [
  { name: <img className="logo" src={logo} alt="" />, link: "/", id: 1 },
  { name: "Catalog", link: "/products", id: 2 },
  { name: "Reviews", link: "/reviews", id: 3 },
  { name: "AboutUs", link: "/AboutUs", id: 4 },
  { name: "Contacts", link: "/contacts", id: 5 },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const { addProductToCart } = useCart();
  useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);
  const {
    logout,
    user: { email },
  } = useAuth();

  return (
    <div className="header">
      <div id="burger-menu">
        <div id="wrapper">
          <BurgerMenu />
        </div>
      </div>
      <div id="navbar_icon">
        <div id="navbar_logo">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
      <nav>
        {pages.map((page) => (
          <Link sx={{ fontSize: "30px" }} key={page.id} to={page.link}>
            {page.name}
          </Link>
        ))}
        {email === ADMIN ? (
          <span
            onClick={() => navigate("/admin-page")}
            sx={{ cursor: "pointer" }}
          >
            Admin page
          </span>
        ) : null}
      </nav>

      <div className="users_name">
        <Badge
          sx={{
            width: "30px",
            height: "30px",
            marginTop: "18px",
            marginRight: "20px",
          }}
          badgeContent={count}
          color="primary"
        >
          <ShoppingCartCheckoutIcon onClick={() => navigate("/cart")} />
        </Badge>

        {email ? (
          <Button
            className="navbar_btns"
            onClick={logout}
            sx={{ my: 2, display: "block" }}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="navbar_btns"
            onClick={() => navigate("/auth")}
            sx={{ my: 2, display: "block" }}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
