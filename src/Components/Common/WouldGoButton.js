import React from "react";
import WouldYouGoModal from "./WouldYouGo.js";
import "./WouldYouGo.scss";
import "./Buttons.scss";
import { Link } from "react-router-dom";

class WouldGoButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      eventID: this.props.eventID
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <WouldYouGoModal show={this.state.show} handleClose={this.hideModal} eventID = {this.state.eventID} />
        <button className="primaryButton" onClick={this.showModal}>
          <div>I would go</div>
        </button>
      </main>
    );
  }
}

export default WouldGoButton;
