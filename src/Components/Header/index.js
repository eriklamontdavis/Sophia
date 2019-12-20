import React, { Component } from "react";
import "./OptedInHeader.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Consumer } from "../Context";

const Header = ({ min, deadline }) => {
  return (
    <Consumer>
      {({ data }) => (
        <React.Fragment>
          <div className="header">
            <h1>{data.min}</h1>
            <p>
              more people needed in <span>{data.deadline}</span> for this
              gathering to happen.
            </p>

            {/*
            <CopyToClipboard onCopy={this.onCopy}>
              <button className="copyLink">
                <i className="ticketIcon" />
                Copy invite link
              </button>
            </CopyToClipboard>
            */}
          </div>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default Header;
