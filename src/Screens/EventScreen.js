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
import withSplashScreen from "../Components/Common/withSplashScreen";
import { Provider } from "../Components/Context";

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eventID: this.props['match']['params']['eventID']}
  }
  render() {
    return (
      <Provider eventID = {this.state.eventID}>
        <React.Fragment>
          <Header />
          <MainCard eventID = {this.state.eventID}/>
          <TextInfoBlock />
          <GuestList />
          <Details />
          <Timer />
          <CtaSection />
          <EventHost />
        </React.Fragment>
      </Provider>
    );
  }
}

export default withSplashScreen(EventScreen);
