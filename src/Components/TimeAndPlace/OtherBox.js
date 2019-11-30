import React from "react";
import "./Time_Place.scss";

const OtherBox = props => (
  <div className="infoCardWrapper">
    <div className="otherInfoCard">
      <h6>When?</h6>
      <p>{props.location}</p>
    </div>
  </div>
);

export default OtherBox;
