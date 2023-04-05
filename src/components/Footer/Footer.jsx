import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "./footerImages/Group 1.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="footer">
        <div className="footer-blue">
          <div className="footer-blue-text">
            <h3 className="h3-footer">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF{" "}
            </h3>
            <span>Sign up for free! </span>
            <button style={{ padding: "5px" }}>Sign up</button>
          </div>
          <img className="logo-footer" src={logo} alt="" />
        </div>

        <div className="footer-black-right">
          <div className="footer-text">
            <h2>About Us</h2>
            <p className="p-of-footer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            </p>
          </div>
          {/* ================================================== links */}

          <div className="Footer-links">
            <h2>Navigation</h2>
            <p
              className={location.pathname == "/products" ? "green" : ""}
              onClick={() => navigate(`/products`)}
            >
              Category
            </p>

            <p
              className={location.pathname == "/AboutUs" ? "green" : ""}
              onClick={() => navigate(`/AboutUs`)}
            >
              About Us
            </p>

            <p
              className={location.pathname == "/contacts" ? "green" : ""}
              onClick={() => navigate(`/contacts`)}
            >
              Contacts
            </p>

            <p
              className={location.pathname == "/admin-page" ? "green" : ""}
              onClick={() => navigate(`/admin-page`)}
            >
              Admin Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
