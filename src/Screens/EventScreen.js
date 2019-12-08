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

class EventScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <MainCard />
        <div className="overviewBG" />
        <TimerCountdown />
        <TextInfoBlock />
        <GuestList />

        <EventHost />
        <CtaSection />
      </React.Fragment>
    );
  }
}

export default EventScreen;
