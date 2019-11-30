import React from "react";
import "./Time_Place.scss";
import Icon_Location from "../../Images/Icon_Location.svg"

const WhereBox = props => (
  <div className="infoCardWrapper">
    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <div className="whereInfoCard">
        <img src={Icon_Location} />
        <h6>Where?</h6>
        <p>{props.location}</p>
      </div>
    </a>
  </div>
);

export default WhereBox;
