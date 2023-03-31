import React from "react";
import "./HomePage.css";
import HomePagePic1 from "./HomePageImages/Group 10.png";
// import HomePagePicTwin from "./HomePageImages/Frame 11.png";

const HomePage = () => {
  return (
    <div>
      <div className="HomePage-body">
        <div className="HomePage-content">
          <div className="HomePage-h3">
            <h3>DO IT</h3>
            <br />
            <h3 className="blue-h3">RIGHT</h3>
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
        </div>
      </div>

      {/* ============= Reviews block start*/}
      <div className="reviews">
        <div className="reviews-text">
          <h3>REVIEWS</h3>
          <button>See all</button>
        </div>
        <div className="reviews-cardlist">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
