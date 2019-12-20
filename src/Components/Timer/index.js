import React from "react";
import "./TimerCountdown.scss";
import "../Common/GlobalStyling.scss";
import TimerIcon from "../../Images/TimerIcon.svg";

import { Consumer } from "../Context";

const Timer = ({ deadline }) => {
  return (
    <Consumer>
      {({ data }) => (
        <div className="container">
          <div className="timerCountdown">
            <img src={TimerIcon} alt="clock icon" />
            <p className="timerTitle">Time to reach minumum guests:</p>
            <p className="timerTime">{data.deadline}</p>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default Timer;
