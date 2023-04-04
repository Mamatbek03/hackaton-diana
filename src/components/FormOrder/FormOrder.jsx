import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { cartCleaner } from "../../helpers/functions";

const FormOrder = () => {
  const navigate = useNavigate();
  const { cartCleaner, cart } = useCart();
  function handleBuy() {
    cartCleaner();
    navigate("/home");
  }
  return (
    <div
      style={{
        fontFamily: "Rubik",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "15%",
        paddingBottom: "5%",
        paddingTop: "5%",
        backgroundColor: "rgb(219, 219, 219)",
      }}
    >
      <div
        className="input-pack"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Form Order</h1>
        <h3>Contact details</h3>
        <p style={{ marginTop: "-15px" }}>
          We will use these details to keep inform about your delivery
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "-20px",
          }}
        >
          <input
            style={{
              height: "30px",
              width: "45%",
              borderRadius: "5px",
              backgroundColor: "transparent",
            }}
            type="text"
            placeholder="Full name"
          />
          <input
            style={{
              height: "30px",
              width: "45%",
              borderRadius: "5px",
              backgroundColor: "transparent",
            }}
            type="number"
            placeholder=" Phone number"
          />
        </div>
        <h3>Shipping Address</h3>
        <input
          style={{
            height: "30px",
            width: "30%",
            borderRadius: "5px",
            backgroundColor: "transparent",
            marginTop: "-20px",
          }}
          type="number"
          placeholder=" City"
        />
        <input
          style={{
            height: "30px",
            width: "60%",
            borderRadius: "5px",
            backgroundColor: "transparent",
          }}
          type="number"
          placeholder="Street"
        />
        <input
          style={{
            height: "30px",
            width: "30%",
            borderRadius: "5px",
            backgroundColor: "transparent",
          }}
          type="number"
          placeholder=" Home"
        />
        <p style={{ marginTop: "-10px" }}>
          Type your street or zip code for suggestion
        </p>

        <input
          style={{
            height: "30px",
            width: "40%",
            borderRadius: "5px",
            backgroundColor: "transparent",
          }}
          type="number"
          placeholder=" deposit amount"
        />
      </div>
      <div
        className="total-pack"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column-reverse",
          width: "50%",
          gap: "10px",
        }}
      >
        <button
          style={{
            width: "40%",
            height: "10%",
            marginLeft: "0px",
            backgroundColor: "rgb(109, 111, 249)",
          }}
          onClick={() => navigate("/card")}
        >
          link card
        </button>

        <button
          style={{ width: "60%", height: "10%", marginLeft: "0px" }}
          onClick={handleBuy}
        >
          Place an order for {cart.totalPrice} soms
        </button>
      </div>
    </div>
  );
};

export default FormOrder;
