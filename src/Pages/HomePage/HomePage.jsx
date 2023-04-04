import React, { useEffect } from "react";
import "./HomePage.css";
import HomePagePic1 from "./HomePageImages/Group 10.png";
import DoItRight from "./HomePageImages/Do it right.png";
import { useProduct } from "../../contexts/ProductContextProvider";
import review1 from "./HomePageImages/reviews1.png";
import review2 from "./HomePageImages/reviews2.png";
import review3 from "./HomePageImages/reviews3.png";

const HomePage = () => {
  const { createStorage } = useProduct();
  useEffect(() => {
    createStorage();
  }, []);

  return (
    <div>
      <div className="HomePage-body">
        <div className="HomePage-content">
          <div className="HomePage-h3">
            <img className="DoItRight" src={DoItRight} alt="..." />
          </div>
        </div>
        <div className="HomePage-block1">
          <img className="HomePagePic1" src={HomePagePic1} alt="" />
          <div className="HomePage-pic-text">
            <h3 className="HP-block1-h3">NIKE AIR MAX</h3>
            <span className="HP-lock1-span">
              Nike introducing the new air max for everyone's comfort
            </span>
            <button className="HP-block1-btn">Shop Now</button>
          </div>
        </div>

        {/* ============= Reviews block start*/}
        <div
          className="reviews"
          style={{
            display: "flex",
            width: "80%",

            justifyContent: "space-around",
          }}
        >
          <div
            className="reviews-text"
            style={{ display: "flex", height: "300px", marginLeft: "-40%" }}
          >
            <h3 style={{ fontFamily: "sans-serif", fontSize: "60px" }}>
              REVIEWS
            </h3>
            <button
              style={{
                height: "50px",
                width: "120px",
                backgroundColor: "rgb(109, 111, 249)",
                border: "none",
                marginTop: "65px",
                marginRight: "-15%",
              }}
            >
              See all
            </button>
          </div>
        </div>
        <div
          className="reviews-cardlist"
          style={{
            marginTop: "200px",
            marginLeft: "9%",
            marginTop: "-100px",
            paddingBottom: "150px",
          }}
        >
          <div className="card" style={{ display: "flex", gap: "30px" }}>
            <img
              style={{ width: "400px", height: "450px" }}
              src={review1}
              alt=""
            />
            <img
              style={{ width: "400px", height: "450px" }}
              src={review2}
              alt=""
            />
            <img
              style={{ width: "400px", height: "450px" }}
              src={review3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
