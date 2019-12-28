import React from "react";
import "./MainCardWrapper.scss";

import { Consumer } from "../Context";

class MainCardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventID: this.props.eventID };
  }
  render() {
    const { participants, min } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <div className="mainCardWrapper">
            <div className="mainCard">{this.props.children}</div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default MainCardWrapper;
