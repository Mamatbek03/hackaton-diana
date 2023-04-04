import React from "react";
import logo from "./Navbarimages/KicksLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import BackgroundLetterAvatars from "../Logo/Logo";
import { Badge, Button, IconButton, Typography } from "@mui/material";
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

const pages = [
  { name: <img className="logo" src={logo} alt="" />, link: "/", id: 1 },
  { name: "Catalog", link: "/products", id: 2 },
  { name: "AboutUs", link: "/AboutUs", id: 3 },
  { name: "Contacts", link: "/contacts", id: 4 },
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
      <nav>
        {pages.map((page) => (
          <Link key={page.id} to={page.link}>
            {page.name}
          </Link>
        ))}
        {email === ADMIN ? (
          <span
            onClick={() => navigate("/admin-page")}
            sx={{ cursor: "pointer" }}
          >
            {" "}
            Admin page
          </span>
        ) : null}
      </nav>
      <div className="search">
        <input
          className="inp-search"
          type="text"
          placeholder="поиск по каталогу"
        />
        <img className="lupa" src={lupa} alt="" />
      </div>
      <div className="users_name">
        <Badge
          sx={{ width: 30, height: 30, marginTop: 1, marginRight: 2 }}
          badgeContent={count}
          color="primary"
        >
          <ShoppingCartCheckoutIcon onClick={() => navigate("/cart")} />
        </Badge>
        <AuthGoogle />

        {email ? (
          <Button onClick={logout} sx={{ my: 2, display: "block" }}>
            Logout
          </Button>
        ) : (
          <Button
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
