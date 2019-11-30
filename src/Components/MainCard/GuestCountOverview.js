import React from "react";
import "./GuestCountOverview.scss";
import CountUp from "react-countup";

const GuestCountOverview = props => (
  <div className="guestOverviewContainer">
    <div className="wouldGoCount">
      <p>Would go</p>

      <h4>
        <CountUp
          start={0}
          end={props.participants}
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
    <div className="requiredCount">
      <p>Required</p>
      <h4>{props.min}</h4>
    </div>
  </div>
);

export default GuestCountOverview;
