import React, { Component } from "react";
import "./Time_Place.scss";
import Time from "./Time";
import Location from "./Location";

import { Consumer } from "../Context";

//TODO: Change and calculate timestamps, also return name of place

class Details extends Component {
  render() {
    return (
      <Consumer>
        {({ data }) => (
          <div className="personCardWrapper">
            <div>
              <div className="infoCardsContainer">
                <Location />
                <Time />
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Details;
