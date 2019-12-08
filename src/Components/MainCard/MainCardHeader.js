import React, { Component } from "react";
import "./MainCardHeader.scss";

import { Consumer } from "../Context";

const MainCardHeader = ({ data }) => {
  return (
    <Consumer>
      {({ data }) => (
        <div className="titleContainer">
          <h1>{data.title}</h1>
          <p className="whenAndWhere">Tuesday 20:00 in Östersund</p>
        </div>
      )}
    </Consumer>
  );
};

export default MainCardHeader;
