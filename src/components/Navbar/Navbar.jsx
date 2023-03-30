import React from "react";
import logo from "./Navbarimages/KicksLogo.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

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
    </div>
  );
};

export default Navbar;
