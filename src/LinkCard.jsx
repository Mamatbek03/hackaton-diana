import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Rubik",
          fontSize: "40px",
          padding: "20px",
        }}
      >
        Card Details
      </h1>
      <Cards
        // sx={{ width: "50%" }}
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <div
        id="PaymentForm"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row-reverse",
          width: "80%",
          paddingBottom: "70px",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            flexDirection: "column",
            gap: "15px",
            alignSelf: "center",
            paddingTop: "50px",
            marginLeft: "28%",
          }}
        >
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="number"
            placeholder="Card Number"
            style={{ height: "30px", borderRadius: "5px", marginTop: "-17px" }}
          />
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="name"
            placeholder="Card Name"
            style={{ height: "30px", borderRadius: "5px" }}
          />
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="cvc"
            placeholder="cvc"
            style={{ height: "30px", borderRadius: "5px" }}
          />
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="expiry"
            placeholder="expiry"
            style={{ height: "30px", borderRadius: "5px" }}
          />
          <input
            onChange={(e) => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
            type="tel"
            name="focus"
            placeholder="focus"
            style={{ height: "30px", borderRadius: "5px" }}
          />
          <button
            style={{
              width: "80%",
              alignSelf: "center",
              marginBottom: "40px",
              marginLeft: "-45px",
              background: "orange",
              border: "none",
              borderRadius: 4,
              height: "30px",
              marginLeft: "5%",
            }}
            onClick={() => navigate("/form-order")}
          >
            {" "}
            Done
          </button>
        </form>
      </div>
    </div>
  );
}
