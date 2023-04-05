import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div
        class="about-us"
        style={{
          display: "flex",
          paddingBottom: "10%",

          backgroundColor: "rgb(219, 219, 219)",
          marginTop: "-35px",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        <div class="about-us-header">
          <h2
            class="about-h2"
            style={{
              fontSize: "50px",
              color: "black",
              fontFamily: "Rubik",
              marginTop: "90px",
            }}
          >
            About Us
          </h2>
        </div>
        <div
          className="alltext"
          style={{
            display: "flex",
            textAlign: "center",
            width: "70%",
            margin: "auto",
          }}
        >
          <div class="about-us-content">
            <div
              class="about-us-text"
              style={{
                padding: "40px",
              }}
            >
              <h3 class="aboutUs_h3">Our Story</h3>
              <p class="about-p">
                "We are a team of enthusiasts who exude a passion for sneakers.
                We review this site to help people find the best models by
                favorable prices. We work closely with manufacturers and are
                proud by offering a wide range of sneakers that combine style
                and comfort."
              </p>

              <h3 class="aboutUs_h3"> Our mission</h3>
              <p class="about-p">
                We strive to provide our customers with the best products and
                services to improve their lives and businesses.
              </p>

              <h3 class="aboutUs_h3">Our Team</h3>
              <p class="about-p">
                "We are a team of professionals who share a passion for sneakers
                and fashion. Our team includes experts in sales, marketing,
                logistics and customer service. We We work to provide the
                highest level of service and help our customers to choose the
                best running shoes at the best price price."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
