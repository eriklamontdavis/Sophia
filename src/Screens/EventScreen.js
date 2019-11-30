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
      data: {
        title: null,
        location: "Såå 364",
        timestamp: "",
        max: 50,
        min: 40,
        participants: 15,
        when: "5/4 19:30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
      },
      guests: [
        {
          name: "Jesper Munkeby",
          image: "https://i.imgur.com/pggdUym.jpg",
          id: 1,
          payed: false
        },
        {
          name: "Jesper Muneby",
          image: "https://i.imgur.com/pggdUym.jpg",
          id: 1,
          payed: false
        }
      ]
    };
  }

  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("events");
    const eventsRef = rootRef.child("data");
    eventsRef.on("value", snap => {
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
            <TopNav />
            <MainCard data={this.state.data} />
            <div className="overviewBG" />
            <TimerCountdown />
            <GuestList />
            <TextInfoBlock data={this.state.data} />
            <TimeAndPlace data={this.state.data} />
            <EventHost />
            <CtaSection />
            <Footer />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default EventScreen;
