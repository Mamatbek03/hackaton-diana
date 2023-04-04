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
    <div id="PaymentForm">
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <form>
        <input
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          type="tel"
          name="number"
          placeholder="Card Number"
        />
        <input
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          type="tel"
          name="name"
          placeholder="Card Name"
        />
        <input
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          type="tel"
          name="cvc"
          placeholder="cvc"
        />
        <input
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          type="tel"
          name="expiry"
          placeholder="expiry"
        />
        <input
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
          type="tel"
          name="focus"
          placeholder="focus"
        />
        ...
      </form>

      <button onClick={() => navigate("/form-order")}> Done</button>
    </div>
  );
}
