import React from "react";
import Guest from "./Guest";
import "./GuestList.scss";

import { Consumer } from "../Context";

const GuestList = () => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          <div className="GuestListContainer">
            <h6>Would go:</h6>
            <div className="personCardRow">
              {context.map(guest => (
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
