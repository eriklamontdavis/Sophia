import React from "react";
import "../EventContainer.css";
import "../Components/MainCard/MainCard.scss";
import FullGuestList from "../Components/FullGuestList";

class GuestListScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FullGuestList />
      </React.Fragment>
    );
  }
}

export default GuestListScreen;
