import React from "react";
import "./MainCardHeader.scss";

const MainCardHeader = props => (
  <div className="titleContainer">
    <h1>{props.title}</h1>
    <p className="whenAndWhere">Tuesday 20:00 in Östersund</p>
  </div>
);

export default MainCardHeader;

// <h2>
// <strong>{props.participantsMin - props.participants} more</strong> people
// needed for this event to happen.
// </h2>
