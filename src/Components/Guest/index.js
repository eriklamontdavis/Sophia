import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Guest.scss";

import { Consumer } from "../Context";

class Guest extends PureComponent {
  render() {
    const { name, image, id } = this.props;

    return (
      <div className="personCardWrapper">
        <Consumer>
          {({ players }) => (
            <div className="guest">
              <div className="userAvatarWrapper">
                <img src={image} className="personAvatarImage" />
              </div>
              <p>{name}</p>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}

export default Guest;
