import React from "react";
import "./Buttons.scss";

const SmallButton = props => (
  <a href="tel:+46722008031" className="smallButton">
    {props.text}
  </a>
);

export default SmallButton;
