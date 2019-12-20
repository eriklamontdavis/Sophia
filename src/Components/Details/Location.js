import React, { Component } from "react";
import "./Time_Place.scss";
import Icon_Location from "../../Images/Icon_Location.svg";

import { Consumer } from "../Context";

class Location extends Component {
  render() {
    const { location } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <div className="infoCardWrapper">
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="whereInfoCard">
                <img src={Icon_Location} />
                <h6>Where?</h6>
                <p>{data.location}</p>
              </div>
            </a>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Location;
