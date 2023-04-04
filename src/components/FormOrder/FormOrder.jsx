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
    <div>
      <h2>Form Order</h2>
      <p>FILL IN DETAILS FOR DELIVERY</p>
      <input type="text" placeholder="Full name" />
      <input type="number" placeholder=" Phone number" />
      <input type="number" placeholder=" City" />
      <input type="number" placeholder="Street" />
      <input type="number" placeholder=" Home" />
      <input type="number" placeholder=" Phone number" />
      <input type="number" placeholder=" deposit amount" />
      <button onClick={() => navigate("/card")}>link card</button>
      <button onClick={handleBuy}>
        place an order for {cart.totalPrice} soms
      </button>
    </div>
  );
};

export default FormOrder;
