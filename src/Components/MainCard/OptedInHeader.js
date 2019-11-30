import React from "react";
import "./OptedInHeader.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

class OptedInHeader extends React.Component {
  state = {
    value: window.location.href,
    copied: false
  };

  render() {
    return (
      <div>
        <div className="optInHeaderDiv">
          <h1>{this.props.required}</h1>
          <h2>More people needed</h2>
          <p>Share the link below with the people you want to bring.</p>
          <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
            <button className="copyLink">
              <i className="ticketIcon" />
              Copy invite link
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default OptedInHeader;
