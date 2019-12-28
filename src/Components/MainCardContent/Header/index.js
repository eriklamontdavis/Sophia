import React, { Component } from "react";
import "./MainCardHeader.scss";

import { Consumer } from "../../Context";

const MainCardHeader = ({ title }) => {
  return (
    <Consumer>
      {({ data }) => (
        <div className="titleContainer">
          <p className="whenAndWhere">Tuesday 20:00 in Östersund</p>
          <h1>{data.title}</h1>
        </div>
      )}
    </Consumer>
  );
};

export default MainCardHeader;
