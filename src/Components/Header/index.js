import React, { Component } from "react";
import "./OptedInHeader.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Consumer } from "../Context";

class Header extends React.Component {
  state = {
    value: window.location.href,
    copied: false
  };

  render() {
    const { deadline, guests, min } = this.props;

    return (
      <Consumer>
        {({ data }) => (
          <React.Fragment>
            <div className="header">
              <h1>{data.min - data.guests.length}</h1>
              <p>
                more people needed in <span>{data.deadline}</span> for this
                gathering to happen.
              </p>

              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}
              >
                <button>
                  {this.state.copied ? (
                    <span style={{ color: "green" }}>Copied.</span>
                  ) : (
                    "Tap to copy link"
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default Header;
