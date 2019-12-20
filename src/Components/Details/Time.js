import React, { Component } from "react";

import "./Time_Place.scss";

import { Consumer } from "../Context";

class Time extends Component {
  render() {
    const { time } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <div className="infoCardWrapper">
            <div className="whenInfoCard">
              <h6>When?</h6>
              <p>{data.time}</p>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Time;
