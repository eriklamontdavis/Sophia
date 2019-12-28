import React from "react";
import Header from "../Header";
import WouldGoButton from "../../Common/WouldGoButton.js";

import GuestCount from "../GuestCount";
import ProgressBar from "../Progress";

import { Consumer } from "../../Context";

class MainCardPre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventID: this.props.eventID };
  }
  render() {
    const { participants, min } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <React.Fragment>
            <Header />
            <GuestCount />
            <ProgressBar percentage={(data.guests.length / data.min) * 100} />
            <div className="buttonContainer">
              <WouldGoButton text="I would go" eventID={this.state.eventID} />
            </div>
            <style jsx>{`
              .buttonContainer {
                display: flex;
                flex-direction: column;
                padding: 16px 16px 16px 16px;
              }
            `}</style>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default MainCardPre;
