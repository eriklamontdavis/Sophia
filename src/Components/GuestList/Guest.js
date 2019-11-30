import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./PersonCard.scss";

class Guest extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

  render() {
    const { name, image, id } = this.props;

    return (
      <div className="personCardWrapper">
        <div className="personCardDiv">
          <div className="userAvatarWrapper">
            <img src={image} className="personAvatarImage" />
          </div>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

export default Guest;
