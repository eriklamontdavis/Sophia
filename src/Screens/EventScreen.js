import React from "react";
import "../EventContainer.css";
import "../Components/MainCard/MainCard.scss";
import MainCard from "../Components/MainCard";
import GuestList from "../Components/GuestList";
import TimeAndPlace from "../Components/TimeAndPlace";
import TextInfoBlock from "../Components/TextInfoBlock";
import CtaSection from "../Components/CtaSection";
import EventHost from "../Components/EventHost";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import TimerCountdown from "../Components/TimerCoutdown";
import * as firebase from "firebase";

import { Provider } from "../Components/Context";

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hej"
    };
  }

  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("event");
    const titleRef = rootRef.child("title");
    titleRef.on("value", snap => {
      this.setState({
        title: snap.val()
      });
    });
  }

  render() {
    return (
      <Provider value={this.state.guests}>
        <React.Fragment>
          <div>
            <h2>{this.state.title}</h2>
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default EventScreen;
