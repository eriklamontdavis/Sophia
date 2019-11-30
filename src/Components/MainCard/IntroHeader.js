import React from "react";
import "./IntroHeader.scss";

class IntroHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <div>
        {this.state.isHidden ? (
          <div className="introHeader">
            <p>
              Gather events happen only if they reach their required guest count
              in time.
            </p>
            <button onClick={this.toggleHidden.bind(this)}>Got it!</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default IntroHeader;
