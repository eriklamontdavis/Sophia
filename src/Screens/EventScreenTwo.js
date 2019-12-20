import React from "react";
import "../EventContainer.css";
import "../Components/MainCard/MainCard.scss";
import MainCard from "../Components/MainCard";
import GuestList from "../Components/GuestList";
import TextInfoBlock from "../Components/TextInfoBlock";
import CtaSection from "../Components/CtaSection";
import EventHost from "../Components/EventHost";
import Timer from "../Components/Timer";
import Header from "../Components/Header";
import Details from "../Components/Details";

class Ya extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TextInfoBlock />
        <GuestList />
        <Timer />
        <Details />
        <EventHost />
        <CtaSection />
      </React.Fragment>
    );
  }
}

export default Ya;
