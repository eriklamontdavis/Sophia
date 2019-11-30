import React from "react";
import "./Time_Place.scss";

const WhenBox = props => (
  <div className="infoCardWrapper">
    <div className="whenInfoCard">
      <h6>When?</h6>
      <p>{props.when}</p>
    </div>
  </div>
);

export default WhenBox;
