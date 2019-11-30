import React from "react";
import "./MainCard.scss";
import MainCardHeader from "./MainCardHeader.js";
import WouldGoButton from "../Common/WouldGoButton.js";

import IntroHeader from "./IntroHeader.js";
import GuestCountOverview from "./GuestCountOverview.js";
import ProgressBar from "./ProgressBar";
import OptedInHeader from "./OptedInHeader";

class MainCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainCardWrapper">
        <OptedInHeader
          required={this.props.data.min - this.props.data.participants}
        />

        <div className="mainCard">
          <MainCardHeader title={this.props.data.title} />
          <GuestCountOverview
            min={this.props.data.min}
            participants={this.props.data.participants}
            max={this.props.data.max}
          />
          <ProgressBar
            percentage={
              (this.props.data.participants / this.props.data.min) * 100
            }
          />
          <div className="buttonContainer">
            <WouldGoButton text="I would go" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainCard;
