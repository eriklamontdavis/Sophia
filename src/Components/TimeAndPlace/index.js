import React from "react";
import "./Time_Place.scss";
import WhenBox from "./WhenBox.js";
import WhereBox from "./WhereBox.js";
import OtherBox from "./OtherBox.js";

//TODO: Change and calculate timestamps, also return name of place
const TimeAndPlace = props => (
  <div>
    <div className="infoCardsContainer">
      <WhenBox when={props.data.when} />
      <WhereBox location={props.data.location} />
      <OtherBox location={props.data.location} />
      <OtherBox location={props.data.location} />
    </div>
  </div>
);

export default TimeAndPlace;
