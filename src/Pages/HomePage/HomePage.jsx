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
            style={{ display: "flex", height: "300px" }}
          >
            <h3>REVIEWS</h3>
          </div>
        </div>
        <div
          className="reviews-cardlist"
          style={{
            marginTop: "200px",
            marginLeft: "9%",
            marginTop: "-40px",
            paddingBottom: "150px",
          }}
        >
          <div className="card" style={{ display: "flex", gap: "30px" }}>
            <img style={{ width: "30%", height: "35%" }} src={review1} alt="" />
            <img style={{ width: "30%", height: "35%" }} src={review2} alt="" />
            <img style={{ width: "30%", height: "35%" }} src={review3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
