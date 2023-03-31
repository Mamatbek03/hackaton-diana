import React from "react";
import chat from "./contactsimage/icons8-чат-64.png";
import newLogo from "./contactsimage/icons8-новинка-80.png";
import headph from "./contactsimage/icons8-наушники-64.png";

const Contacts = () => {
  return (
    <div>
      <div className="contacts_wrapper">
        <div className="contacts_block">
          <img className="contact_logos" src={headph} alt="" />
          <h3>BY PHONE</h3>
          <p>North America Toll-Free:</p>
          <p>1-877-930-7483</p>
          <p>International:</p>
          <p>1-604-637-0780</p>
          <button>Start Chat</button>
        </div>
        <div className="contacts_block">
          <img className="contact_logos" src={newLogo} alt="" />
          <h3>START A NEW CASE </h3>
          <p>
            Just send us your questions or concerns by staring a new case and we
            will give yiu the help tou need
          </p>
          <button>Start Here</button>
        </div>
        <div className="contacts_block">
          <img className="contact_logos" src={chat} alt="" />
          <h3>LIVE CHAT</h3>
          <p>Chat with a member of our in-house team</p>
          <button>Start Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
