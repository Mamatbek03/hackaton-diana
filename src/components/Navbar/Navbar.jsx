import React from "react";
import logo from "./Navbarimages/KicksLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import BackgroundLetterAvatars from "../Logo/Logo";
import { Badge, IconButton } from "@mui/material";
import { ExitToAppOutlined } from "@mui/icons-material";
import lupa from "./Navbarimages/icon.png";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AuthGoogle from "../AuthGoogle/AuthGoogle";

const pages = [
  { name: <img className="logo" src={logo} alt="" />, link: "/home", id: 1 },
  { name: "Catalog", link: "/products", id: 2 },
  { name: "AboutUs", link: "/AboutUs", id: 3 },
  { name: "Contacts", link: "/contacts", id: 4 },
  { name: "Admin Page", link: "/admin-page", id: 5 },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <nav>
        {pages.map((page) => (
          <Link key={page.id} to={page.link}>
            {page.name}
          </Link>
        ))}
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
          badgeContent={4}
          color="primary"
        >
          <ShoppingCartCheckoutIcon onClick={() => navigate("/cart")} />
        </Badge>
        <AuthGoogle />
        <IconButton>
          <ExitToAppOutlined sx={{ width: 30, height: 30, marginLeft: 1 }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
