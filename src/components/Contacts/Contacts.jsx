import React from "react";
import "../Contacts/Contacts.css";

const Contacts = () => {
  return (
    <div
      className="contacts_all"
      style={{
        display: "flex",
        paddingBottom: "10%",
        width: "100% ",
        backgroundColor: "rgb(219, 219, 219)",
        marginTop: "-35px",
        flexDirection: "column",
      }}
    >
      <div
        className="h1-of-contacts"
        style={{
          fontFamily: "Rubik",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          padding: "20px",
        }}
      >
        <h1>Contact Us</h1>
      </div>
      <div
        className="contacts_wrapper"
        style={{
          width: "80% ",
          marginLeft: "7%",
        }}
      >
        <div
          className="contacts_block"
          style={{
            border: "2px solid transparent",
            borderRadius: "15px",
            padding: "10px",
            fontFamily: "sans-serif",
            textAlign: "center",
            color: "black",
          }}
        >
          <h3 style={{ padding: "15px 0 ", borderBottom: "2px solid orange" }}>
            BY PHONE
          </h3>
          <p>North America Toll-Free:</p>
          <p>1-877-930-7483</p>
          <p>International:</p>
          <p>1-604-637-0780</p>
        </div>
        <div
          className="contacts_block"
          style={{
            border: "2px solid transparent",
            borderRadius: "15px",
            padding: "10px",
            fontFamily: "sans-serif",
            textAlign: "center",
            color: "black",
          }}
        >
          <h3 style={{ padding: "15px 0", borderBottom: "2px solid orange" }}>
            START A NEW CASE{" "}
          </h3>
          <p>
            Just send us your questions or concerns by staring a new case and we
            will give yiu the help tou need
          </p>
          <button style={{ marginLeft: "-5px", marginTop: "8px" }}>
            Start Here
          </button>
        </div>
        <div
          className="contacts_block"
          style={{
            border: "2px solid transparent",
            borderRadius: "15px",
            padding: "10px",
            fontFamily: "sans-serif",
            textAlign: "center",
            color: "black",
          }}
        >
          <h3 style={{ padding: "15px 0", borderBottom: "2px solid orange" }}>
            LIVE CHAT
          </h3>
          <p>Chat with a member of our in-house team</p>
          <button style={{ marginTop: "26px" }}>Start Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
