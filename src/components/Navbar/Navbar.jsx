import React from "react";
import logo from "./Navbarimages/KicksLogo.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import BackgroundLetterAvatars from "../Logo/Logo";
import { IconButton } from "@mui/material";
import { ExitToAppOutlined } from "@mui/icons-material";
import lupa from "./Navbarimages/icon.png";

const pages = [
  { name: "Category", link: "/products", id: 1 },
  { name: "AboutUs", link: "/AboutUs", id: 2 },
  { name: "Contacts", link: "/contacts", id: 3 },
  { name: "Admin Page", link: "/admin-page", id: 5 },
];

const Navbar = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
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
        <BackgroundLetterAvatars />
        <IconButton>
          <ExitToAppOutlined sx={{ width: 30, height: 30, marginLeft: 1 }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
