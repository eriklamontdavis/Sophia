import React from "react";
import "./OptedInHeader.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Consumer } from "../Context";

class OptedInHeader extends React.Component {
  state = {
    value: window.location.href,
    copied: false
  };

  render() {
    return (
      <Consumer>
        {({ data }) => (
          <div>
            <div className="optInHeaderDiv">
              <h1>{data.min}</h1>
              <p>
                more people needed in <span>{data.deadline}</span> for this
                gathering to happen.
              </p>
              <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                <button className="copyLink">
                  <i className="ticketIcon" />
                  Copy invite link
                </button>
              </CopyToClipboard>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default OptedInHeader;
