import React from "react";
import "../../EventContainer.css";
import "../../Components/Common/GlobalStyling.scss";

import MainCardWrapper from "../../Components/MainCardWrapper";
import MainCardPre from "../../Components/MainCardContent/MainCardPre";
import GuestList from "../../Components/GuestList";
import TextInfoBlock from "../../Components/TextInfoBlock";
import CtaSection from "../../Components/CtaSection";
import EventHost from "../../Components/EventHost";
import Timer from "../../Components/Timer";
import Header from "../../Components/Header";
import Details from "../../Components/Details";

import { Provider } from "../../Components/Context";

class ConceptScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventID: this.props["match"]["params"]["eventID"] };
  }
  render() {
    return (
      <Provider eventID={this.state.eventID}>
        <React.Fragment>
          <Header />
          <MainCardWrapper eventID={this.state.eventID}>
            <MainCardPre />
          </MainCardWrapper>
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

export default ConceptScreen;
