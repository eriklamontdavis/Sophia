import React, { Component } from "react";

import CountUp from "react-countup";
import global from "../Common/GlobalStyling.js";
import Going from "../../Images/Going.svg";

import { Consumer } from "../Context";

class GuestCountOverview extends Component {
  render() {
    const { min, participants } = this.props;
    return (
      <Consumer>
        {({ data }) => (
          <React.Fragment>
            <div className="guestOverviewContainer">
              <div className="going">
                <div className="left">
                  <img src={Going} alt="clock icon"></img>
                  <p>Would go</p>
                </div>
                <h4>
                  <CountUp
                    start={0}
                    end={data.participants}
                    duration={4}
                    separator=" "
                    decimals={0}
                    onEnd={() => console.log("Ended")}
                    onStart={() => console.log("Started")}
                    delay={0}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h4>
              </div>
              {/*
              <div className="requiredCount">
                <p>Required</p>
                <h4>{data.min}</h4>
              </div>
              */}
            </div>
            <style jsx>{`
              .guestOverviewContainer {
                padding: 0.6em 1em;
              }
              .going {
                width: auto;
                padding: 1em 1em;
                border-radius: ${global.radius};
                display: flex;
                flex-direction: row;

                align-items: center;
                justify-content: space-between;

                border-style: solid;
                border-width: 3px;
                border-color: rgba(255, 130, 67, 0.2);
              }
              .going h4 {
                font-weight: ${global.bold};
                font-size: 1.5em;
                margin: 0px;
              }
              .going p {
                font-size: 1.2em;
                font-weight: 400;

                margin: 0px;
              }
              .going img {
                width: 24px;
                margin-right: 0.8em;
              }
              .left {
                display: flex;
                flex-direction: row;
              }
            `}</style>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default GuestCountOverview;
