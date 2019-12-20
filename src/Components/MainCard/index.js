import React from "react";
import "./MainCard.scss";
import Header from "./Header";
import WouldGoButton from "../Common/WouldGoButton.js";
import Intro from "./Intro";
import GuestCount from "./GuestCount";
import ProgressBar from "./Progress";

import { Consumer } from "../Context";

class MainCard extends React.Component {
  render() {
    const { participants, min } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <div className="mainCardWrapper">
            <div className="mainCard">
              <Header />
              <GuestCount />
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
