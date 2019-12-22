import React, { PureComponent } from "react";
import "../Guest/styling.scss";

import { Consumer } from "../Context";

class Guest extends React.Component {
  render() {
    const { index } = this.props;

    return (
      <React.Fragment>
        <Consumer>
          {({ guests }) => (
            <React.Fragment>
              <div className="personCardDiv">
                <div className="userAvatarWrapper">
                  <img
                    src={guests[index].image}
                    className="personAvatarImage"
                  />
                </div>
                <h4>{guests[index].name}</h4>
              </div>
            </React.Fragment>
          )}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default Guest;
