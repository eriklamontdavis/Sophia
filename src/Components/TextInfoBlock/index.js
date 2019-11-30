import React from "react";
import "./TextInfoBlock.scss";

const TextInfoBlock = props => (
  <div className="textInfoWrapper">
    <p>{props.data.description}</p>
  </div>
);

export default TextInfoBlock;
