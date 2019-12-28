import React, { PureComponent } from "react";
import "./GuestStyling.scss";

import { Consumer } from "../Context";

class Guest extends React.Component {
  render() {
    const { index } = this.props;

    return (
      <React.Fragment>
        <Consumer>
          {({ guests }) => (
            <React.Fragment>
              <li className="guest-card">
                <h4>{guests[index].name}</h4>
              </li>
            </React.Fragment>
          )}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default Guest;
