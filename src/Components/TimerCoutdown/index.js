import React from "react";
import "./TimerCountdown.scss";
import "../Common/GlobalStyling.scss";
import TimerIcon from "../../Images/TimerIcon.svg";

class TimerCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 3600
    };
  }

  display(seconds) {
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const days = seconds / (3600 * 24);
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;

    return (
      days.toFixed(0) +
      "d " +
      hours.toFixed(0) +
      "h " +
      minutes.toFixed(0) +
      "m"
    );
  }

  componentDidMount() {
    this.setState({
      time: this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time - 1
        }),
      1000
    );
    console.log("start");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  secondsToMinutes(time) {
    return Math.floor(time / 60) + "m " + Math.floor(time % 60) + "s";
  }

  render() {
    return (
      <div className="container">
        <div className="timerCountdown">
          <img src={TimerIcon} alt="clock icon" />
          <p className="timerTitle">Time to reach minumum guests:</p>
          <p className="timerTime">{this.display(this.state.time)}</p>
        </div>
      </div>
    );
  }
}

export default TimerCountdown;
