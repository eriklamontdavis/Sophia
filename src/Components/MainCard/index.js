import React from "react";
import "./MainCard.scss";
import MainCardHeader from "./MainCardHeader.js";
import WouldGoButton from "../Common/WouldGoButton.js";

import IntroHeader from "./IntroHeader.js";
import GuestCountOverview from "./GuestCountOverview.js";
import ProgressBar from "./ProgressBar";
import OptedInHeader from "./OptedInHeader";

import { Consumer } from "../Context";

class MainCard extends React.Component {
  render() {
    return (
      <Consumer>
        {({ data }) => (
          <div className="mainCardWrapper">
            <OptedInHeader />
            <div className="mainCard">
              <MainCardHeader />
              <GuestCountOverview />
              <ProgressBar percentage={(data.participants / data.min) * 100} />
              <div className="buttonContainer">
                <WouldGoButton text="I would go" />
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default MainCard;
