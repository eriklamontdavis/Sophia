import React from "react";
import Guest from "./Guest";
import propTypes from "prop-types";
import "./GuestList.scss";

import { Consumer } from "../Context";

const GuestList = props => {
  return (
    <Consumer>
      {({ data }) => (
        <React.Fragment>
          <div className="GuestListContainer">
            <h6>Would go:</h6>
            <div className="personCardRow">
              {data.guests.map(guest => (
                <Guest {...guest} key={guest.id.toString()} />
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default GuestList;
