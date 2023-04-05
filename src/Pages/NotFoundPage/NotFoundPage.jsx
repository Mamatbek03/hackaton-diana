import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(219, 219, 219)",
          fontFamily: "Rubik",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          height: "400px",
          gap: "30px",
        }}
      >
        <h1>¯\_(ツ)_/¯</h1>
        <h1 style={{ marginTop: "100px" }}>Page not found</h1>
        <h1 style={{ marginTop: "100px" }}>404</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
