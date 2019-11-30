import React from "react";
import SmallButton from "../Common/SmallButton.js";
import "./EventHost.scss";

const EventHost = props => (
  <div className="hostDivWrapper">
    <div className="hostDiv">
      <img src="https://i.imgur.com/pggdUym.jpg" alt="host" />
      <div className="hostNameDiv">
        <h6>Contact person:</h6>
        <p>Jesper Munkeby </p>
      </div>
      <div className="contactButtonWrapper">
        <SmallButton text="Contact" />
      </div>
    </div>
  </div>
);

export default EventHost;
