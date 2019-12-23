import React from "react";
import "./MainCard.scss";
import Header from "./Header";
import WouldGoButton from "../Common/WouldGoButton.js";
import Intro from "./Intro";
import GuestCount from "./GuestCount";
import ProgressBar from "./Progress";

import { Consumer } from "../Context";

class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eventID: this.props.eventID}
  }
  render() {
    const { participants, min } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <div className="mainCardWrapper">
            <div className="mainCard">
              <Header />
              <GuestCount />
              <ProgressBar percentage={(data.guests.length / data.min) * 100} />
              <div className="buttonContainer">
                <WouldGoButton text="I would go" eventID = {this.state.eventID}/>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default MainCard;
