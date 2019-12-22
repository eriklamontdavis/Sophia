import React, { useState, useEffect } from "react"; // update
import Guest from "../Guest";
import "./styling.scss";
import { Consumer } from "../Context";

class GuestList extends React.Component {
  render() {
    const { index } = this.props;

    return (
      <React.Fragment>
        <Consumer>
          {({ guests }) => (
            <React.Fragment>
              <div className="personCardContainer">
                <h6>Would go:</h6>
                <ul className="personCardRow">
                  {guests.map((guest, index) => (
                    <Guest index={index} />
                  ))}
                </ul>
              </div>
            </React.Fragment>
          )}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default GuestList;
